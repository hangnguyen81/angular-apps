import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?: Hero;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit() {
    this.fetchHero();
  }

  fetchHero() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe({
      next: (data) => (this.hero = data),
      error: (error) => console.log(error),
    });
  }
  goBack() {
    this.location.back();
  }
}
