import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/Services/backend.service';

@Component({
  selector: 'app-battle-history',
  templateUrl: './battle-history.component.html',
  styleUrls: ['./battle-history.component.css']
})
export class BattleHistoryComponent implements OnInit {
  storedBattleDetails: any;
  battles: any[] = [];

  constructor(private backendService: BackendService) {}

  ngOnInit(): void {
    this.backendService.getBattles().subscribe((result) => {
      this.battles = result;
      console.log(`Data: ${this.battles}`);
    });
  }
}
