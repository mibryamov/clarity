import { Component } from '@angular/core';

import * as Team from '../../data/team.json';
import * as Contributors from '../../data/contributors.json';
import * as GitHub from '../../data/github.json';
import * as Jobs from '../../data/jobs.json';

@Component({
  selector: 'app-engage',
  templateUrl: './engage.component.html',
  styleUrls: ['./engage.component.scss'],
})
export class EngageComponent {
  jobs = Jobs;
  team = Team;
  contributors = Contributors;
  github = GitHub.filter(user => {
    let valid = true;
    Team.forEach(member => {
      if (user.author.login === member.github) {
        valid = false;
      }
    });
    return valid;
  }).reverse();

  onReqClick(url: string) {
    if (window['trackHiringAlert']) {
      window['trackHiringAlert'](url, true);
      return false;
    }
    return true;
  }
}
