import qs from 'query-string';
import axios from 'axios';

import { setHomeLocation, startProgress, stopProgress } from 'fm3/actions/mainActions';
import { toastsAdd, toastsAddError } from 'fm3/actions/toastsActions';
import { authSetUser } from 'fm3/actions/authActions';

export default function initAuthHelper(store) {
  const authToken = localStorage.getItem('authToken');

  if (authToken) {
    const pid = Math.random();
    store.dispatch(startProgress(pid));
    axios({
      url: `${process.env.API_URL}/auth/validate`,
      method: 'post',
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      validateStatus: status === 200 || status === 401,
    })
      .then((res) => {
        if (res.status === 200) {
          store.dispatch(authSetUser(res.data));
        }
      })
      .catch((err) => {
        store.dispatch(toastsAddError(`Nepodarilo sa prihlásiť: ${err.message}`));
      })
      .then(() => {
        store.dispatch(stopProgress(pid));
      });
  }

  window.addEventListener('message', (e) => {
    /* eslint-disable no-underscore-dangle */

    if (e.origin !== location.origin || typeof e.data !== 'object' || !e.data.__freemap || !e.data.__freemap.oauthParams) {
      return;
    }

    const { oauth_token: token, oauth_verifier: verifier } = qs.parse(e.data.__freemap.oauthParams);

    const pid = Math.random();
    store.dispatch(startProgress(pid));
    axios.post(
      `${process.env.API_URL}/auth/login2`,
      { token, verifier },
      {
        validateStatus: status === 200,
      },
    )
      .then(({ data }) => {
        localStorage.setItem('authToken', data.authToken);

        if (!store.getState().main.homeLocation) {
          store.dispatch(setHomeLocation({ lat: data.lat, lon: data.lon }));
        }

        store.dispatch(toastsAdd({
          collapseKey: 'login',
          message: 'Boli ste úspešne prihlásený.',
          style: 'info',
          timeout: 5000,
        }));
        store.dispatch(authSetUser(data));
      })
      .catch((err) => {
        store.dispatch(toastsAddError(`Nepodarilo sa prihlásiť: ${err.message}`));
      })
      .then(() => {
        store.dispatch(stopProgress(pid));
      });
  });
}
