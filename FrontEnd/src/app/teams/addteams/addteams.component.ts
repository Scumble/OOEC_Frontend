import {  
    Component,  
    OnInit  
} from '@angular/core';  
import {  
    Http,  
    Headers  
} from '@angular/http';  
import {  
    NgForm,  
    FormBuilder,  
    FormGroup,  
    Validators,  
    FormControl  
} from '@angular/forms';  
import {  
    Router,  
    ActivatedRoute  
} from '@angular/router';  
import {  
    TeamComponent  
} from '../teams.component';  
import {  
    TeamService  
} from '../../services/teams.services';  
import { Globals } from 'src/app/globals';
@Component({  
    templateUrl: './addteams.component.html'  
})  
export class AddTeam implements OnInit {  
    teamForm: FormGroup;  
    title: string = "Create";  
    id: number;  
    errorMessage: any;  
    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute, private _teamService: TeamService, private _router: Router,private globals:Globals) {  
        if (this._avRoute.snapshot.params["teamID"]) {  
            this.id = this._avRoute.snapshot.params["teamID"];  
        }  
        this.teamForm = this._fb.group({  
            id: 0,  
            teamName:['',Validators.required],
            tag:['',Validators.required],
            numberOfPlayers:['',Validators.required],
            players:[],
            radiantLobbies:[],
            direLobbies:[]
        })  
    }  
    ngOnInit() {  
        if (this.id > 0) {  
            this.title = "Edit";  
            this._teamService.getTeamById(this.id).subscribe(resp => this.teamForm.setValue(resp), error => this.errorMessage = error);  
        }  
    }  
    save() {  
        if (!this.teamForm.valid) {  
            return;  
        }  
        if (this.title == "Create") {  
            this._teamService.saveTeam(this.teamForm.value).subscribe((data) => {  
                this._router.navigate(['/allTeams']);  
            }, error => this.errorMessage = error)  
        } else if (this.title == "Edit") {  
            this._teamService.updateTeam(this.teamForm.value).subscribe((data) => {  
                this._router.navigate(['/allTeams']);  
            }, error => this.errorMessage = error)  
        }  
    }  
    cancel() {  
        this._router.navigate(['/allTeams']);  
    }  
    get teamName() {  
        return this.teamForm.get('teamName');  
    }  
    get tag() {  
        return this.teamForm.get('tag');  
    }  
    get numberOfPlayers() {  
        return this.teamForm.get('numberOfPlayers');  
    }  
}  