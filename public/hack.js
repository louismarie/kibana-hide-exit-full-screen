import { npStart } from 'ui/new_platform';

const enabledParam = npStart.core.uiSettings.get('hide-exit-full-screen:enabled');
if (enabledParam) {
  $('.dshExitFullScreenButton').hide();
}


