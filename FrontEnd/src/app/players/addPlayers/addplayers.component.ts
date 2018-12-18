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
    PlayerComponent  
} from '../players.component';  
import {  
    PlayerService  
} from '../../services/players.services';  
import { Globals } from 'src/app/globals';
@Component({  
    templateUrl: './addplayers.component.html'  
})  
export class AddPlayer implements OnInit {  
    playerForm: FormGroup;  
    title: string = "Create";  
    id: number;  
    errorMessage: any;  
    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute, private _playerService: PlayerService, private _router: Router,private globals:Globals) {  
        if (this._avRoute.snapshot.params["playerID"]) {  
            this.id = this._avRoute.snapshot.params["playerID"];  
        }  
        this.playerForm = this._fb.group({  
            id: 0,  
            name:['',Validators.required],
            position:['',Validators.required],
            age:['',Validators.required],
            teamId:this.globals.TeamId,
            team:[]
        })  
    }  
    ngOnInit() {  
        if (this.id > 0) {  
            this.title = "Edit";  
            this._playerService.getPlayerById(this.id).subscribe(resp => this.playerForm.setValue(resp), error => this.errorMessage = error);  
        }  
    }  
    save() {  
        if (!this.playerForm.valid) {  
            return;  
        }  
        if (this.title == "Create") {  
            this._playerService.savePlayer(this.playerForm.value).subscribe((data) => {  
                this._router.navigate(['/players/'+ this.globals.TeamId]);  
            }, error => this.errorMessage = error)  
        } else if (this.title == "Edit") {  
            this._playerService.updatePlayer(this.playerForm.value).subscribe((data) => {  
                this._router.navigate(['/players/'+ this.globals.TeamId]);  
            }, error => this.errorMessage = error)  
        }  
    }  
    cancel() {  
        this._router.navigate(['/players/'+this.globals.TeamId]);  
    }  
    get name() {  
        return this.playerForm.get('name');  
    }  
    get position() {  
        return this.playerForm.get('position');  
    }  
    get age() {  
        return this.playerForm.get('age');  
    }  
    get teamId() {
        return this.playerForm.get('this.globals.TeamId');
    }
}  