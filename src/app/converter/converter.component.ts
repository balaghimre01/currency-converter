import { Component, OnInit } from '@angular/core';
import { CurrencyExchangeService } from '../services/exchange-rate.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  amount = 1;
  from = "USD";
  to = "INR";
  rates: {[key: string]: number};

  convert(): number{
    return this.amount * this.rates[this.to];
  }

  loadRates(){
    this.service.getRates(this.from).subscribe(res => this.rates = res.rates);
  }

  getAllCurriencies(): string[] {
    return Object.keys(this.rates);
  }

  constructor(private service: CurrencyExchangeService) {
  }

  ngOnInit(): void {
    this.loadRates();
  }

}
