import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarMessagesComponent } from './sidebar-messages.component';

describe('SidebarMessagesComponent', () => {
  let component: SidebarMessagesComponent;
  let fixture: ComponentFixture<SidebarMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
