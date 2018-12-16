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
    LobbiesComponent  
} from '../lobbies.component';  
import {  
    LobbyService  
} from '../../services/lobbies.services';  
import { Globals } from '../../globals';
@Component({  
    templateUrl: './addlobby.component.html'  
})  
export class AddLobby implements OnInit {  
    lobbyForm: FormGroup;  
    title: string = "Create";
    id: number;  
    TournamentId:number;
    errorMessage: any;
    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute, private _lobbyService: LobbyService, private _router: Router,private globals:Globals) {
        if (this._avRoute.snapshot.params["lobbyID"]) {  
            this.id = this._avRoute.snapshot.params["lobbyID"];  
        }  
        this.lobbyForm = this._fb.group({
            dateStart: ['', [Validators.required]],
            direTeam:[],  
            dire_team_name:['',[Validators.required]],
            id: 0,  
            radiantTeam:[],
            radiant_team_name:['',[Validators.required]],
            scoreLoser:['',[Validators.required]],  
            scoreWinner: ['', [Validators.required]],
            tournament:[],
            tournamentId: this.globals.TournamentId, 
            winner: ['', [Validators.required]]
            
        })
    }  
    ngOnInit() {  
        if (this.id > 0) {  
            this.title = "Edit";  
            this._lobbyService.getLobbyById(this.id).subscribe(resp => this.lobbyForm.setValue(resp[0]), error => this.errorMessage = error); 
        } 
    }  
    save() {  
        if (!this.lobbyForm.valid) {  
            return;  
        }  
        if (this.title == "Create") {  
            this._lobbyService.saveLobby(this.lobbyForm.value).subscribe((data) => {  
                this._router.navigate(['/lobby/getcreatedbytournament/'+ this.globals.TournamentId]);  
            }, error => this.errorMessage = error)  
        } else if (this.title == "Edit") {  
            this._lobbyService.updateLobby(this.lobbyForm.value).subscribe((data) => {  
                this._router.navigate(['/lobby/getcreatedbytournament/'+ this.globals.TournamentId]);  
            }, error => this.errorMessage = error)  
        }  
    }  
    cancel() {  
        this._router.navigate(['/lobby/getcreatedbytournament/'+ this.globals.TournamentId]); 
    }  
   
    get dateStart() {  
        return this.lobbyForm.get('dateStart');  
    }  
    get scoreWinner() {  
        return this.lobbyForm.get('scoreWinner');  
    }  
    get tournamentId() {  
        return this.lobbyForm.get('this.globals.TournamentId');  
    }  
    get winner() {  
        return this.lobbyForm.get('winner');  
    }  
    get scoreLoser() {  
        return this.lobbyForm.get('scoreLoser');  
    }  
    get radiant_team_name() {
        return this.lobbyForm.get('radiant_team_name');  
    }
    get dire_team_name() {
        return this.lobbyForm.get('dire_team_name');  
    }
}  

