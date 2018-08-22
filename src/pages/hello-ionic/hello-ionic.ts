import { Component } from '@angular/core';
import { SiriShortcuts } from '@ionic-native/siri-shortcuts';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(private siriShortcuts: SiriShortcuts) {
  }

  donatingShortcut() {
    console.log(this.siriShortcuts);
    this.siriShortcuts.donate({
      persistentIdentifier: 'open-my-app',
      title: 'Open my app',
      suggestedInvocationPhrase: 'Open my app',
      userInfo: { username: 'username' },
      isEligibleForSearch: true,
      isEligibleForPrediction: true,
  })
  .then(() => console.log('Shortcut donated.'))
  .catch((error: any) => console.error(error));
  }
}
