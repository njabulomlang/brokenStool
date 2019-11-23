import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KwangaApparelPage } from './kwanga-apparel.page';

describe('KwangaApparelPage', () => {
  let component: KwangaApparelPage;
  let fixture: ComponentFixture<KwangaApparelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KwangaApparelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KwangaApparelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
