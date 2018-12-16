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
    TournamentDataComponent  
} from '../tournamentdata.component';  
import {  
    TournamentService  
} from '../../services/tournamentservices';  
@Component({  
    templateUrl: './addtournament.component.html'  
})  
export class AddTournament implements OnInit {  
    tournamentForm: FormGroup;  
    title: string = "Create";  
    id: number;  
    errorMessage: any;  
    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute, private _tournamentService: TournamentService, private _router: Router) {  
        if (this._avRoute.snapshot.params["tournamentID"]) {  
            this.id = this._avRoute.snapshot.params["tournamentID"];  
        }  
        this.tournamentForm = this._fb.group({  
            id: 0,  
            place: ['', [Validators.required]],  
            prizePool: ['', [Validators.required]],  
            tournamentName: ['', [Validators.required]],  
            type: ['', [Validators.required]],
            dateStart:['',[Validators.required]],
            dateEnd:['',[Validators.required]],
            description:['',[Validators.required]],
            game:['',[Validators.required]],
            identityId:[''],
            identity:[],
            lobbies:[]
        
        })  
    }  
    ngOnInit() {  
        if (this.id > 0) {  
            this.title = "Edit";  
            this._tournamentService.getTournamentById(this.id).subscribe(resp => this.tournamentForm.setValue(resp), error => this.errorMessage = error);  
        }  
    }  
    save() {  
        if (!this.tournamentForm.valid) {  
            return;  
        }  
        if (this.title == "Create") {  
            this._tournamentService.saveTournament(this.tournamentForm.value).subscribe((data) => {  
                this._router.navigate(['/tournaments']);  
            }, error => this.errorMessage = error)  
        } else if (this.title == "Edit") {  
            this._tournamentService.updateTournament(this.tournamentForm.value).subscribe((data) => {  
                this._router.navigate(['/tournaments']);  
            }, error => this.errorMessage = error)  
        }  
    }  
    cancel() {  
        this._router.navigate(['/tournaments']);  
    }  
    get place() {  
        return this.tournamentForm.get('place');  
    }  
    get prizePool() {  
        return this.tournamentForm.get('prizePool');  
    }  
    get tournamentName() {  
        return this.tournamentForm.get('tournamentName');  
    }  
    get type() {  
        return this.tournamentForm.get('type');  
    }  
    get dateStart() {
        return this.tournamentForm.get('dateStart');  
    }
    get dateEnd() {
        return this.tournamentForm.get('dateEnd');  
    }
    get description() {
        return this.tournamentForm.get('description');  
    }
    get game() {
        return this.tournamentForm.get('game');  
    }
}  