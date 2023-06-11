import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumesTableComponent } from './albumes-table.component';

describe('AlbumesTableComponent', () => {
  let component: AlbumesTableComponent;
  let fixture: ComponentFixture<AlbumesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumesTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
