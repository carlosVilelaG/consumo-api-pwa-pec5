import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumesCardComponent } from './albumes-card.component';

describe('AlbumesCardComponent', () => {
  let component: AlbumesCardComponent;
  let fixture: ComponentFixture<AlbumesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumesCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
