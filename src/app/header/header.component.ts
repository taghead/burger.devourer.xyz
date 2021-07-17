import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { SupabaseService } from '../supabase.service'
import { Provider } from '@supabase/supabase-js'
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  title = 'taghead.xyz';
  titleSubText = 'Consume the borgor';

  constructor(public dialog: MatDialog, private readonly supabase: SupabaseService, private readonly router: Router) {
    this.supabase.authChanges(() => {
      if (this.supabase.getSession){
        document.getElementById('userAuthBtn').innerHTML = "Logout";
      }
      this.dialog.closeAll();
    });
  }

  ngOnInit(): void {
    if (this.supabase.getSession()){
      document.getElementById('userAuthBtn').innerHTML = "Logout";
    }
  }

  getTitle() {
    return this.title;
  }

  getTitleSubText() {
    return this.titleSubText;
  }

  userAuthBtnOnClick() {
    if (this.supabase.getSession()){
      this.supabase.signOut();
      document.getElementById('userAuthBtn').innerHTML = "Login"
    }
    else {
      this.dialog.open(LoginDialogComponent);
    }
  }
}
