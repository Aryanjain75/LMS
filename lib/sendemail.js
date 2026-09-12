import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
function signupemail({ OTP, username, device, location, timezone }) {
    return `
<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="color-scheme" content="light">
<meta name="supported-color-schemes" content="light">
<title>Confirm your AIGODMODE email</title>
<!--[if mso]>
<noscript>
<xml>
<o:OfficeDocumentSettings>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
</noscript>
<![endif]-->
<style>
  /* Progressive enhancement only — every element that matters is also inline,
     because Gmail, Outlook desktop and most mobile clients strip <style> blocks
     or ignore them entirely. Never rely on this block alone for layout. */
  body, table, td { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
  table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
  img { border: 0; line-height: 100%; outline: none; text-decoration: none; }
  body { margin: 0; padding: 0; width: 100% !important; background-color: #f7f9fb; }
  .otp-copy-btn:hover { background-color: #e6e8ea; }
  .cli-copy-btn:hover { opacity: 0.85; }
  a.report-link { color: #091426; }
  @media (max-width: 600px) {
    .container { width: 100% !important; }
    .stack { display: block !important; width: 100% !important; }
    .otp-digits { font-size: 34px !important; letter-spacing: 4px !important; }
    .pad { padding-left: 20px !important; padding-right: 20px !important; }
  }
</style>
</head>
<body style="margin:0; padding:0; background-color:#f7f9fb;">

  <!-- Preheader: this is the line inbox previews show. It must be hidden, and it
       must be DIFFERENT from the H1 below — right now the visible intro paragraph
       was doing this job in plain sight, which wastes the most valuable line of
       real estate an OTP email has (a person scanning their inbox for the code). -->
  <div style="display:none; max-height:0; overflow:hidden; mso-hide:all; font-size:1px; line-height:1px; color:#f7f9fb;">
    Your AIGODMODE code is ${OTP} — it expires in 10 minutes.
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f7f9fb;">
    <tr>
      <td align="center" style="padding: 32px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" class="container"
               style="width:600px; max-width:600px; background-color:#ffffff; border-radius:12px; overflow:hidden;">

          <!-- Brand bar -->
          <tr>
            <td class="pad" style="padding: 28px 40px 20px 40px; border-bottom:1px solid #e0e3e5;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td valign="middle">
                    <table role="presentation" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width:28px; height:28px; background-color:#091426; border-radius:6px; text-align:center; vertical-align:middle;">
                          <!--[if !mso]><!-->
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style="vertical-align:middle;">
                            <path d="M12 2 3 21h4l1.8-4h6.4L17 21h4L12 2Zm-2.4 11L12 7.8 14.4 13Z" fill="#ffffff"/>
                          </svg>
                          <!--<![endif]-->
                          <!--[if mso]>
                          <span style="color:#ffffff; font-family:Arial,Helvetica,sans-serif; font-size:13px; font-weight:700;">A</span>
                          <![endif]-->
                        </td>
                        <td style="padding-left:8px; font-family:Arial,Helvetica,sans-serif;">
                          <div style="color:#091426; font-size:13px; font-weight:700; line-height:16px;">AIGODMODE</div>
                          <div style="color:#75777d; font-size:11px; font-weight:600; letter-spacing:0.03em; line-height:14px;">EMAIL VERIFICATION</div>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td valign="middle" align="right">
                    <span style="display:inline-block; padding:5px 10px; background-color:#eceef0; border-radius:4px; font-family:Arial,Helvetica,sans-serif; font-size:11px; font-weight:600; color:#45474c;">Account setup</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Headline + greeting -->
          <tr>
            <td class="pad" style="padding: 32px 40px 8px 40px; font-family:Arial,Helvetica,sans-serif;">
              <h1 style="margin:0 0 16px 0; color:#091426; font-size:22px; line-height:30px; font-weight:700;">Confirm it's you</h1>
              <p style="margin:0; color:#191c1e; font-size:16px; line-height:24px;">Hi ${username},</p>
              <p style="margin:12px 0 0 0; color:#45474c; font-size:15px; line-height:23px;">
                Enter this code to finish setting up your AIGODMODE account. If you're using the app, you can also paste it in directly.
              </p>
            </td>
          </tr>

          <!-- OTP card -->
          <tr>
            <td class="pad" style="padding: 20px 40px 8px 40px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f2f4f6; border-radius:10px;">
                <tr>
                  <td align="center" style="padding: 24px 20px 16px 20px; font-family:Arial,Helvetica,sans-serif;">
                    <div style="color:#75777d; font-size:11px; font-weight:700; letter-spacing:0.08em; margin-bottom:10px;">YOUR VERIFICATION CODE</div>
                    <table role="presentation" cellpadding="0" cellspacing="0">
                      <tr>
                        <td valign="middle">
                          <span id="otpDigits" class="otp-digits"
                                style="font-family:'Courier New',Courier,monospace; font-size:40px; font-weight:700; letter-spacing:8px; color:#091426; user-select:all; -webkit-user-select:all;">${OTP}</span>
                        </td>
                        <td valign="middle" style="padding-left:14px;">
                          <!-- This button only works where <script> survives (a browser preview, an in-app
                               webview) — most inbox clients strip scripts outright. That's why the digits
                               above are marked user-select:all: press-and-hold / triple-click select is the
                               fallback that works everywhere, and it's what most people will actually use. -->
                          <button id="copyOtpBtn" type="button" onclick="copyCode('${OTP}','copyOtpBtn')"
                                  class="otp-copy-btn" aria-label="Copy code"
                                  style="width:40px; height:40px; border-radius:8px; border:1px solid #c5c6cd; background-color:#ffffff; cursor:pointer; text-align:center; line-height:0;">
                            <svg id="copyOtpIcon" width="16" height="16" viewBox="0 0 24 24" fill="none" style="vertical-align:middle;">
                              <rect x="9" y="9" width="12" height="12" rx="2" stroke="#45474c" stroke-width="2"/>
                              <path d="M6 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2" stroke="#45474c" stroke-width="2"/>
                            </svg>
                          </button>
                        </td>
                      </tr>
                    </table>
                    <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:12px;">
                      <tr>
                        <td valign="middle" style="padding-right:5px;">
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="13" r="8" stroke="#8a5a00" stroke-width="2"/>
                            <path d="M12 9v4l3 2" stroke="#8a5a00" stroke-width="2" stroke-linecap="round"/>
                            <path d="M9 2h6" stroke="#8a5a00" stroke-width="2" stroke-linecap="round"/>
                          </svg>
                        </td>
                        <td valign="middle" style="font-family:Arial,Helvetica,sans-serif; font-size:12px; color:#8a5a00;">
                          Expires in 10 minutes &middot; single use only
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CLI alt path -->
          <tr>
            <td class="pad" style="padding: 16px 40px 8px 40px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#eceef0; border-radius:10px;">
                <tr>
                  <td style="padding: 14px 18px; font-family:Arial,Helvetica,sans-serif;">
                    <table role="presentation" cellpadding="0" cellspacing="0" style="margin-bottom:8px;">
                      <tr>
                        <td valign="middle" style="padding-right:6px;">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                            <rect x="2" y="4" width="20" height="16" rx="2" stroke="#45474c" stroke-width="2"/>
                            <path d="M6 9l4 3-4 3" stroke="#45474c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12 15h6" stroke="#45474c" stroke-width="2" stroke-linecap="round"/>
                          </svg>
                        </td>
                        <td valign="middle" style="font-size:11px; font-weight:700; color:#45474c; letter-spacing:0.03em;">Verifying from the CLI instead?</td>
                      </tr>
                    </table>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#091426; border-radius:6px;">
                      <tr>
                        <td style="padding:10px 14px; font-family:'Courier New',Courier,monospace; font-size:13px; color:#ffffff;">
                          aigodmode auth verify ${OTP}
                        </td>
                        <td align="right" style="padding:10px 14px;">
                          <button id="copyCliBtn" type="button" onclick="copyCode('aigodmode auth verify ${OTP}','copyCliBtn')"
                                  class="cli-copy-btn" aria-label="Copy command"
                                  style="background:none; border:none; cursor:pointer; padding:0; line-height:0;">
                            <svg id="copyCliIcon" width="14" height="14" viewBox="0 0 24 24" fill="none" style="vertical-align:middle;">
                              <rect x="9" y="9" width="12" height="12" rx="2" stroke="#bcc7de" stroke-width="2"/>
                              <path d="M6 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2" stroke="#bcc7de" stroke-width="2"/>
                            </svg>
                          </button>
                        </td>
                      </tr>
                    </table>
                    <p style="margin:10px 0 0 0; font-size:12px; line-height:18px; color:#75777d;">Run this in the terminal where you're already signed in with the CLI.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Sign-in context: kept to what's actually useful for spotting a stranger's
               attempt (device + rough location). The original also listed an internal
               "target workload", an "audit reference token", and a raw content hash —
               none of that helps the recipient decide anything, it just borrows the
               look of a security tool to seem more official. Cut it. -->
          <tr>
            <td class="pad" style="padding: 16px 40px 8px 40px; font-family:Arial,Helvetica,sans-serif;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e0e3e5; border-radius:4px;">
                <tr>
                  <td style="padding: 14px 18px;">
                    <div style="font-size:11px; font-weight:700; color:#45474c; letter-spacing:0.03em; margin-bottom:10px;">THIS REQUEST CAME FROM</div>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td class="stack" width="50%" style="font-size:13px; color:#191c1e; padding-bottom:4px;">
                          <table role="presentation" cellpadding="0" cellspacing="0">
                            <tr>
                              <td valign="middle" style="padding-right:6px;">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                  <rect x="4" y="2" width="16" height="20" rx="2" stroke="#75777d" stroke-width="2"/>
                                  <path d="M11 18h2" stroke="#75777d" stroke-width="2" stroke-linecap="round"/>
                                </svg>
                              </td>
                              <td valign="middle"><span style="color:#75777d;">Device:</span> ${device}</td>
                            </tr>
                          </table>
                        </td>
                        <td class="stack" width="50%" style="font-size:13px; color:#191c1e; padding-bottom:4px;">
                          <table role="presentation" cellpadding="0" cellspacing="0">
                            <tr>
                              <td valign="middle" style="padding-right:6px;">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                  <path d="M12 22s7-7.1 7-12a7 7 0 1 0-14 0c0 4.9 7 12 7 12Z" stroke="#75777d" stroke-width="2"/>
                                  <circle cx="12" cy="10" r="2.5" stroke="#75777d" stroke-width="2"/>
                                </svg>
                              </td>
                              <td valign="middle"><span style="color:#75777d;">Location:</span> ${location}</td>
                            </tr>
                          </table>
                        </td>
                        <td class="stack" width="50%" style="font-size:13px; color:#191c1e; padding-bottom:4px;">
                          <table role="presentation" cellpadding="0" cellspacing="0">
                            <tr>
                              <td valign="middle" style="padding-right:6px;">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                  <path d="M12 22s7-7.1 7-12a7 7 0 1 0-14 0c0 4.9 7 12 7 12Z" stroke="#75777d" stroke-width="2"/>
                                  <circle cx="12" cy="10" r="2.5" stroke="#75777d" stroke-width="2"/>
                                </svg>
                              </td>
                              <td valign="middle"><span style="color:#75777d;">Timezone:</span> ${timezone}</td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Safety notice -->
          <tr>
            <td class="pad" style="padding: 16px 40px 28px 40px; font-family:Arial,Helvetica,sans-serif;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#fff8f0; border-radius:10px;">
                <tr>
                  <td style="padding:14px 18px;">
                    <table role="presentation" cellpadding="0" cellspacing="0">
                      <tr>
                        <td valign="top" style="padding-right:10px; padding-top:1px;">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2 1 21h22L12 2Z" stroke="#c88000" stroke-width="2" stroke-linejoin="round"/>
                            <path d="M12 9v5" stroke="#c88000" stroke-width="2" stroke-linecap="round"/>
                            <circle cx="12" cy="17" r="1" fill="#c88000"/>
                          </svg>
                        </td>
                        <td valign="top" style="font-family:Arial,Helvetica,sans-serif; font-size:13px; line-height:20px; color:#45474c;">
                          <strong style="color:#191c1e;">Didn't request this?</strong><br>
                          Someone may have typed your email by mistake — you don't need to do anything. If this keeps happening,
                          <a class="report-link" href="#" style="text-decoration:underline;">let us know</a>.
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td class="pad" style="padding: 20px 40px 28px 40px; border-top:1px solid #e0e3e5; font-family:Arial,Helvetica,sans-serif;">
              <p style="margin:8px 0 0 0; font-size:11px; color:#75777d;">
                &copy; 2026 AIGODMODE Inc. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

<script>
  // Progressive enhancement ONLY. Gmail, Outlook, and most other inbox clients
  // strip <script> tags on receipt, so these buttons will simply do nothing in a
  // real inbox — that's expected, not a bug, and it's why the OTP text itself is
  // selectable and the CLI command is shown as plain copyable text regardless.
  var CHECK_SVG = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M4 12l6 6L20 6" stroke="#0a7d4b" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  function copyCode(value, btnId) {
    var btn = document.getElementById(btnId);
    var done = function () {
      if (!btn) return;
      var original = btn.innerHTML;
      btn.innerHTML = CHECK_SVG;
      setTimeout(function () { btn.innerHTML = original; }, 1500);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(value).then(done, done);
    } else {
      var ta = document.createElement('textarea');
      ta.value = value;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); } catch (e) {}
      document.body.removeChild(ta);
      done();
    }
  }
</script>
</body>
</html>
`;
}
export async function sendEmail({ OTP,email, username, device, latitude, longitude, timezone }) {
    try {
        if (!process.env.RESEND_API_KEY) {
            throw new Error("RESEND_API_KEY is not configured");
        }

        let location = "Unknown location";
        if (Number.isFinite(latitude) && Number.isFinite(longitude)) {
            const response = await fetch(
                `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`,
                { headers: { "User-Agent": "AIGODMODE/1.0" } },
            );
            const data = await response.json();
            console.log("Reverse geocoding data:", data.display_name);
            location = data.display_name;
        }

        const { error } = await resend.emails.send({
            from: 'aigodmodeai@resend.dev',
            to: email,
            subject: 'Confirm your AIGODMODE email',
            html: signupemail({ OTP, username, device: device?.userAgent || device || "Unknown device", location, timezone }),
        });
        if (error) {
            throw new Error(error.message || "Resend rejected the email");
        }

        return { location };
    } catch (err) {
        console.log(err);
        throw err;
    }
}

