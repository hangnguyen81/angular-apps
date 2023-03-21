import { Component, OnInit } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { HeroService } from '../services/hero.service';
import { MessageService } from '../services/message.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.fetchHeroes();
  }

  fetchHeroes() {
    this.heroService.getHeroes().subscribe({
      next: (data) => (this.heroes = data),
      error: (error) => console.log(error),
    });
  }
}
