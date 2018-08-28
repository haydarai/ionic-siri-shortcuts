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

  presentShortcut() {
    this.siriShortcuts.present({
      persistentIdentifier: 'open-my-app',
      title: 'Open my app',
      suggestedInvocationPhrase: 'Open my app',
      userInfo: { username: 'username' },
    })
      .then(() => console.log('Shortcut added.'))
      .catch((error: any) => console.error(error));
  }

  removeShortcut() {
    this.siriShortcuts.remove('open-my-app')
      .then(() => console.log('Shortcut removed.'))
      .catch((error: any) => console.error(error));
  }

  removeAllShortcuts() {
    this.siriShortcuts.removeAll()
      .then(() => console.log('All shortcuts removed removed.'))
      .catch((error: any) => console.error(error));
  }
}
