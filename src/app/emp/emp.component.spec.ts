import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpComponent } from './emp.component';

describe('EmpComponent', () => {
  let component: EmpComponent;
  let fixture: ComponentFixture<EmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpComponent ],
      imports: [ HttpClientModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});