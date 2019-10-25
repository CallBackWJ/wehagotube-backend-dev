import passport from "passport";
import { Strategy } from "passport-google-authcode";
const GoogleTokenStrategyCallback = (
  accessToken,
  refreshToken,
  profile,
  done
) =>
  done(null, {
    accessToken,
    refreshToken,
    profile
  });
passport.use(
  new Strategy(
    {
      clientID:
        "582721858124-msmrbfu9hs073da415js0l60jg5e8ej3.apps.googleusercontent.com",
      clientSecret: "_ghW7KRIeNYDwpUu-WIU4Pah",
      callbackURL:"https://wehagotube-backend-dev.herokuapp.com/",
      grant_type:"authorization_code"
    },
    GoogleTokenStrategyCallback
  )
);

export const authenticateGoogle = (req, res) =>
  new Promise((resolve, reject) => {
    passport.authenticate(
      "google-authcode",
      { session: false },
      (err, data, info) => {
        if (err) reject(err);
        resolve({ data, info });
      }
    )(req, res);
  });
