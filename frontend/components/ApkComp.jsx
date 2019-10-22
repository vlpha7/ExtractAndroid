import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { CardActions, Collapse } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const data = {
  "activities": [
      {
          "Name": "getjar.android.client.ui.ReadRecommandActivity"
      },
      {
          "Name": "getjar.android.client.APKInstallActivity"
      },
      {
          "Name": "getjar.android.client.ui.GetJarWeb"
      },
      {
          "Name": "getjar.android.client.NotificationUIMsg"
      },
      {
          "Name": "getjar.android.client.Main"
      },
      {
          "Name": "getjar.android.client.ui.WebViewFlipper"
      }
  ],
  "apiPackageRelationships": [
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "android.os.PowerManager.WakeLock.release()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.util.Random.nextInt(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "android.app.AlarmManager.setRepeating(android.app.PendingIntent,long,long,long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "android.app.Notification.<init>(long,java.lang.CharSequence,long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "java.io.ObjectInputStream.<init>(java.io.InputStream)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client.transaction",
              "getjar.android.client.data"
          ],
          "api": {
              "Name": "java.util.List.add(java.lang.Object)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.webkit.WebView.setOnTouchListener(android.view.View.OnTouchListener)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client",
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.content.Intent.<init>(java.lang.Class,android.content.Context)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.webkit.WebView.getSettings()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.widget.ImageView.setImageBitmap(android.graphics.Bitmap)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client.data"
          ],
          "api": {
              "Name": "android.util.Log.w(java.lang.String,java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.util.Timer.schedule(long,long,java.util.TimerTask)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.data"
          ],
          "api": {
              "Name": "android.database.sqlite.SQLiteOpenHelper.<init>(long,android.database.sqlite.SQLiteDatabase.CursorFactory,java.lang.String,android.content.Context)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "android.os.StatFs.<init>(java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.data"
          ],
          "api": {
              "Name": "android.database.sqlite.SQLiteOpenHelper.close()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client",
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.app.Activity.<init>()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "java.util.zip.GZIPOutputStream.close()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "android.content.Context.getPackageName()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.lang.reflect.Method.invoke([Ljava.lang.Object,java.lang.Object)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.data"
          ],
          "api": {
              "Name": "android.content.ContentValues.<init>()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "android.os.SystemClock.elapsedRealtime()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "java.util.zip.GZIPInputStream.read(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "java.nio.ByteBuffer.hasRemaining()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "android.app.Service.onDestroy()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client",
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.os.Bundle.get(java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.data"
          ],
          "api": {
              "Name": "android.database.Cursor.close()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.io.File.getName()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.webkit.WebView.canGoBack()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client",
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.app.AlertDialog.Builder.setPositiveButton(android.content.DialogInterface.OnClickListener,long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "android.webkit.WebView.<init>(android.content.Context)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "java.io.ObjectStreamClass.getName()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client",
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.content.Intent.<init>(java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.lang.StringBuilder.length()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.io.File.list(java.io.FilenameFilter)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client",
              "getjar.android.client.transaction"
          ],
          "api": {
              "Name": "java.util.List.size()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.io.FileInputStream.getChannel()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "java.util.zip.GZIPInputStream.close()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "java.lang.Float.intValue()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.content.SharedPreferences.edit()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client.transaction"
          ],
          "api": {
              "Name": "java.lang.Exception.printStackTrace()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.widget.ListView.setOnCreateContextMenuListener(android.view.View.OnCreateContextMenuListener)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client",
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "java.io.FileInputStream.<init>(java.io.File)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "java.io.InputStream.read()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "java.lang.AssertionError.<init>()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.app.ProgressDialog.dismiss()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.transaction"
          ],
          "api": {
              "Name": "java.lang.Error.getLocalizedMessage()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.widget.TextView.setPadding(long,long,long,long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.content.SharedPreferences.getLong(long,java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.view.MotionEvent.getX()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client",
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "java.io.File.exists()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "android.app.Service.<init>()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "android.app.PendingIntent.getActivity(long,android.content.Intent,long,android.content.Context)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "java.io.OutputStream.write(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client.transaction"
          ],
          "api": {
              "Name": "java.util.List.iterator()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.widget.Button.setVisibility(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.view.View.draw(android.graphics.Canvas)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "java.net.URL.getPath()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "java.io.BufferedInputStream.<init>(java.io.InputStream)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "android.os.PowerManager.WakeLock.acquire()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.widget.ProgressBar.setPadding(long,long,long,long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "android.content.Intent.<init>(android.content.Intent)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client",
              "getjar.android.client.data",
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "java.util.HashMap.get(java.lang.Object)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client",
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.os.Environment.getExternalStorageDirectory()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "java.net.URL.getAuthority()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "java.io.FilterOutputStream.close()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.widget.ProgressBar.<init>(long,android.util.AttributeSet,android.content.Context)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.app.AlertDialog.Builder.setNegativeButton(android.content.DialogInterface.OnClickListener,long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.os.Handler.sendEmptyMessage(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.lang.StringBuffer.<init>()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.io.BufferedReader.<init>(long,java.io.Reader)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.lang.StackTraceElement.getLineNumber()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.widget.Toast.show()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.widget.ProgressBar.setIndeterminate(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client",
              "getjar.android.client.transaction",
              "getjar.android.client.data"
          ],
          "api": {
              "Name": "java.util.Iterator.next()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "android.provider.Settings.Secure.getString(java.lang.String,android.content.ContentResolver)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "java.lang.Class.forName(java.lang.ClassLoader,long,java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "java.io.ByteArrayInputStream.<init>(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "java.lang.Math.log(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client",
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.content.Intent.getDataString()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.io.OutputStream.flush()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.net.Uri.toString()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.os.Handler.<init>()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "android.app.PendingIntent.getService(long,android.content.Intent,long,android.content.Context)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "android.os.Environment.getDataDirectory()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.widget.LinearLayout.setOrientation(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.util.HashMap.containsKey(java.lang.Object)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.content.SharedPreferences.Editor.commit()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client",
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "java.net.URLDecoder.decode(java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.io.File.lastModified()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.io.FileOutputStream.write(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.webkit.WebView.setWebViewClient(android.webkit.WebViewClient)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "java.io.ByteArrayOutputStream.write(long,long,long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client",
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.app.AlertDialog.Builder.setMessage(java.lang.CharSequence)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.data"
          ],
          "api": {
              "Name": "android.database.Cursor.getInt(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "java.util.ArrayList.get(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "java.lang.ref.SoftReference.<init>(java.lang.Object)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client"
          ],
          "api": {
              "Name": "java.net.HttpURLConnection.setReadTimeout(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.lang.Throwable.printStackTrace()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client"
          ],
          "api": {
              "Name": "java.io.File.getAbsolutePath()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.nio.channels.FileChannel.transferTo(java.nio.channels.WritableByteChannel,long,long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client",
              "getjar.android.client.transaction",
              "getjar.android.sdk",
              "getjar.android.client.data",
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "java.lang.StringBuilder.<init>()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "javax.crypto.spec.IvParameterSpec.<init>(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.view.View.getLayoutParams()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "android.graphics.Bitmap.compress(java.io.OutputStream,long,android.graphics.Bitmap.CompressFormat)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.data"
          ],
          "api": {
              "Name": "android.content.ContentValues.put(java.lang.String,java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.widget.BaseAdapter.<init>()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client",
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.app.AlertDialog.Builder.<init>(android.content.Context)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "java.lang.Boolean.parseBoolean(java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.widget.TextView.setGravity(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.app.Activity.onContextItemSelected(android.view.MenuItem)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client",
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "java.io.IOException.<init>(java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "java.lang.Float.<init>(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.widget.Toast.makeText(long,java.lang.CharSequence,android.content.Context)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "java.util.HashMap.<init>(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "android.app.NotificationManager.notify(android.app.Notification,long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.data"
          ],
          "api": {
              "Name": "android.database.sqlite.SQLiteDatabase.beginTransaction()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "java.lang.String.<init>(java.lang.String,long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.lang.StackTraceElement.getMethodName()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.io.BufferedReader.<init>(java.io.Reader)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.lang.StringBuilder.<init>(java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.widget.ListView.setOnItemClickListener(android.widget.AdapterView.OnItemClickListener)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "android.content.IntentFilter.addAction(java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.widget.Button.setText(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client"
          ],
          "api": {
              "Name": "java.util.Properties.size()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.lang.StackTraceElement.getClassName()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.content.ComponentName.<init>(java.lang.String,java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.view.MenuInflater.inflate(android.view.Menu,long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.graphics.BitmapFactory.decodeFile(java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.widget.LinearLayout.<init>(android.content.Context)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client"
          ],
          "api": {
              "Name": "java.lang.Throwable.getMessage()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client.transaction"
          ],
          "api": {
              "Name": "android.content.Context.getResources()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "android.app.AlertDialog.getWindow()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "java.lang.Math.sqrt(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "java.io.FileOutputStream.<init>(java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.net.Uri.fromFile(java.io.File)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.lang.Boolean.toString(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.view.View.findViewById(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.webkit.WebSettings.setUserAgentString(java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.data"
          ],
          "api": {
              "Name": "java.lang.Enum.valueOf(java.lang.String,java.lang.Class)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "java.io.FileWriter.<init>(java.io.File)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client",
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.net.NetworkInfo.isConnected()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "android.content.Context.stopService(android.content.Intent)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client.transaction"
          ],
          "api": {
              "Name": "java.lang.Class.getName()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.graphics.Canvas.<init>(android.graphics.Bitmap)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.view.Window.requestFeature(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.transaction"
          ],
          "api": {
              "Name": "java.util.ArrayList.add(java.lang.Object)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.net.HttpURLConnection.disconnect()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "java.lang.System.arraycopy(long,long,java.lang.Object,long,java.lang.Object)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client"
          ],
          "api": {
              "Name": "java.lang.reflect.Field.getInt(java.lang.Object)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.widget.ViewFlipper.setAnimation(android.view.animation.Animation)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.io.BufferedReader.close()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client",
              "getjar.android.client.transaction",
              "getjar.android.client.data"
          ],
          "api": {
              "Name": "java.util.Iterator.hasNext()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client.data",
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "java.util.HashMap.put(java.lang.Object,java.lang.Object)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "java.io.ObjectInputStream.resolveClass(java.io.ObjectStreamClass)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "javax.net.ssl.HttpsURLConnection.getInputStream()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client",
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.content.Intent.<init>()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client",
              "getjar.android.client.transaction",
              "getjar.android.client.data"
          ],
          "api": {
              "Name": "java.lang.Long.valueOf(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "android.app.Notification.setLatestEventInfo(android.app.PendingIntent,java.lang.CharSequence,java.lang.CharSequence,android.content.Context)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.content.Context.getFilesDir()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "android.content.Context.startService(android.content.Intent)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client",
              "getjar.android.client.data",
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "java.lang.String.startsWith(java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.data"
          ],
          "api": {
              "Name": "android.database.Cursor.moveToNext()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.content.Intent.setDataAndType(java.lang.String,android.net.Uri)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client"
          ],
          "api": {
              "Name": "java.util.Properties.<init>()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.view.MotionEvent.getAction()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "java.io.ByteArrayInputStream.close()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.util.Enumeration.hasMoreElements()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.content.pm.ApplicationInfo.<init>()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.view.View.layout(long,long,long,long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "android.content.Context.getSystemService(java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.view.View.setTag(java.lang.Object)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "javax.crypto.Cipher.getInstance(java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.net.NetworkInterface.getInetAddresses()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "java.nio.ByteBuffer.get(long,long,long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "java.lang.String.<init>(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.io.BufferedInputStream.available()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "java.io.OutputStream.write(long,long,long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "android.graphics.BitmapFactory.decodeStream(java.io.InputStream)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "android.content.SharedPreferences.Editor.putString(java.lang.String,java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.io.PrintWriter.<init>(java.io.Writer)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.data"
          ],
          "api": {
              "Name": "android.database.sqlite.SQLiteDatabase.delete([Ljava.lang.String,java.lang.String,java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "java.lang.IllegalArgumentException.<init>()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client",
              "getjar.android.client.transaction",
              "getjar.android.client.data"
          ],
          "api": {
              "Name": "java.util.Set.iterator()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.lang.System.runFinalizersOnExit(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "android.os.Message.<init>()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "java.net.URL.getFile()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.util.Enumeration.nextElement()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "java.io.File.deleteOnExit()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client"
          ],
          "api": {
              "Name": "java.io.File.<init>(java.lang.String,java.io.File)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "java.lang.String.<init>()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.util.Timer.cancel()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "java.lang.Object.finalize()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "android.content.pm.PackageManager.getInstalledApplications(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client",
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.app.AlertDialog.Builder.create()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "android.content.Intent.getData()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client.transaction"
          ],
          "api": {
              "Name": "android.util.Log.v(java.lang.String,java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client.transaction",
              "getjar.android.client.data"
          ],
          "api": {
              "Name": "java.util.ArrayList.<init>()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client"
          ],
          "api": {
              "Name": "java.net.HttpURLConnection.getInputStream()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "java.io.InputStream.read(long,long,long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.webkit.WebChromeClient.<init>()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.widget.ViewFlipper.showPrevious()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "java.nio.ByteBuffer.remaining()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.data"
          ],
          "api": {
              "Name": "android.database.Cursor.getColumnIndex(java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.view.ViewGroup.LayoutParams.<init>(long,long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.content.SharedPreferences.Editor.putInt(long,java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client"
          ],
          "api": {
              "Name": "java.net.HttpURLConnection.setRequestMethod(java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.util.Random.<init>()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "java.util.zip.GZIPOutputStream.write(long,long,long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.widget.LinearLayout.setGravity(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.util.List.remove(java.lang.Object)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.data"
          ],
          "api": {
              "Name": "android.database.sqlite.SQLiteDatabase.close()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.lang.StackTraceElement.getFileName()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.content.res.Resources.getSystem()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "java.util.Timer.schedule(long,java.util.TimerTask)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client",
              "getjar.android.client.transaction"
          ],
          "api": {
              "Name": "java.lang.Object.getClass()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.lang.Long.parseLong(java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client.transaction"
          ],
          "api": {
              "Name": "android.util.Log.e(java.lang.String,java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "java.net.URLEncoder.encode(java.lang.String,java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.graphics.Bitmap.createBitmap(android.graphics.Bitmap.Config,long,long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "java.lang.String.lastIndexOf(java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "java.io.ObjectOutputStream.close()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.view.animation.AnimationUtils.loadAnimation(long,android.content.Context)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client"
          ],
          "api": {
              "Name": "java.util.Properties.getProperty(java.lang.String,java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.net.HttpURLConnection.setConnectTimeout(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "javax.crypto.Cipher.init(java.security.spec.AlgorithmParameterSpec,java.security.Key,long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.test.AndroidTestCase.<init>()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client.transaction"
          ],
          "api": {
              "Name": "java.util.Date.getTime()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "android.os.StatFs.getBlockCount()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "java.io.ObjectInputStream.close()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "java.lang.String.getBytes()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.content.Intent.setData(android.net.Uri)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.nio.channels.FileChannel.close()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.lang.Integer.toString(long,long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "android.os.Handler.post(java.lang.Runnable)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client",
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.content.Context.startActivity(android.content.Intent)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "java.io.FilterOutputStream.<init>(java.io.OutputStream)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client",
              "getjar.android.client.transaction",
              "getjar.android.sdk",
              "getjar.android.client.data"
          ],
          "api": {
              "Name": "java.lang.Integer.valueOf(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.content.Intent.getAction()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.widget.TextView.setLayoutParams(android.view.ViewGroup.LayoutParams)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client"
          ],
          "api": {
              "Name": "java.net.HttpURLConnection.getResponseCode()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client"
          ],
          "api": {
              "Name": "java.io.FileOutputStream.close()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.content.SharedPreferences.getInt(long,java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "java.lang.ref.SoftReference.get()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "java.util.UUID.randomUUID()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.net.InetAddress.isLoopbackAddress()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "java.io.OutputStream.close()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.test.suitebuilder.TestSuiteBuilder.includeAllPackagesUnderHere()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "android.webkit.WebSettings.getUserAgentString()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "android.os.StatFs.getAvailableBlocks()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client",
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.content.Intent.getExtras()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "java.util.Map.put(java.lang.Object,java.lang.Object)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.widget.LinearLayout.addView(long,android.view.View)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.os.ParcelFileDescriptor.open(long,java.io.File)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client",
              "getjar.android.client.transaction",
              "getjar.android.sdk",
              "getjar.android.client.event",
              "getjar.android.client.data",
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "java.lang.Object.<init>()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client",
              "getjar.android.client.transaction"
          ],
          "api": {
              "Name": "android.os.AsyncTask.<init>()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.lang.System.exit(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.io.File.canRead()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.data"
          ],
          "api": {
              "Name": "android.database.sqlite.SQLiteDatabase.endTransaction()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client",
              "getjar.android.client.transaction",
              "getjar.android.client.data",
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "java.lang.String.equals(java.lang.Object)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.io.FileInputStream.available()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.io.File.mkdir()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "android.content.pm.PackageManager.getPackageInfo(long,java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.widget.LinearLayout.LayoutParams.<init>(long,long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.app.Activity.onConfigurationChanged(android.content.res.Configuration)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.lang.StringBuffer.append(java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.content.IntentFilter.<init>(java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "java.net.HttpURLConnection.setInstanceFollowRedirects(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.widget.Button.setOnClickListener(android.view.View.OnClickListener)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client",
              "getjar.android.client.transaction",
              "getjar.android.sdk",
              "getjar.android.client.data"
          ],
          "api": {
              "Name": "java.lang.StringBuilder.append(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.widget.ListView.setAdapter(android.widget.ListAdapter)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.transaction"
          ],
          "api": {
              "Name": "java.lang.Exception.getMessage()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.widget.ProgressBar.setProgressDrawable(android.graphics.drawable.Drawable)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.lang.Long.toString(long,long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.net.HttpURLConnection.setAllowUserInteraction(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client.transaction"
          ],
          "api": {
              "Name": "android.util.Log.i(java.lang.String,java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "android.os.PowerManager.newWakeLock(java.lang.String,long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "java.util.zip.GZIPInputStream.<init>(java.io.InputStream)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "java.io.InputStream.close()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client",
              "getjar.android.client.data"
          ],
          "api": {
              "Name": "java.lang.String.substring(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client",
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.content.Intent.getStringExtra(java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.io.File.listFiles()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.text.SimpleDateFormat.<init>(java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.webkit.WebSettings.setJavaScriptEnabled(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.io.FileInputStream.read(long,long,long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "android.content.ComponentName.getPackageName()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "java.io.BufferedOutputStream.<init>(java.io.OutputStream)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.lang.Class.getMethod([Ljava.lang.Class,java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.test.suitebuilder.TestSuiteBuilder.build()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client",
              "getjar.android.client.transaction"
          ],
          "api": {
              "Name": "java.lang.Thread.sleep(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.lang.reflect.Method.getName()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.data"
          ],
          "api": {
              "Name": "android.database.Cursor.getString(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client.transaction"
          ],
          "api": {
              "Name": "java.lang.StringBuffer.toString()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "android.net.Uri.getSchemeSpecificPart()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "android.app.ActivityManager.getRecentTasks(long,long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "java.io.FileOutputStream.write(long,long,long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client"
          ],
          "api": {
              "Name": "java.lang.Class.getDeclaredField(java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client",
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.app.Activity.onCreate(android.os.Bundle)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "java.lang.String.contains(java.lang.CharSequence)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.widget.ProgressBar.setProgress(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.net.NetworkInterface.getNetworkInterfaces()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.sdk",
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "java.io.File.<init>(java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "java.lang.NullPointerException.<init>(java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.content.Context.getCacheDir()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.net.HttpURLConnection.setUseCaches(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.lang.Object.toString()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.transaction"
          ],
          "api": {
              "Name": "java.lang.Throwable.getLocalizedMessage()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.data"
          ],
          "api": {
              "Name": "android.database.Cursor.moveToFirst()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "android.content.Intent.getFlags()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.content.Intent.<init>(android.net.Uri,java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "java.nio.CharBuffer.put(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.widget.LinearLayout.getChildAt(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.content.res.Resources.getDrawable(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.text.SimpleDateFormat.format(java.util.Date)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client.data"
          ],
          "api": {
              "Name": "java.lang.Long.toString(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.app.AlertDialog.Builder.setTitle(java.lang.CharSequence)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "android.content.Context.getSharedPreferences(long,java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "java.lang.Thread.start()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.io.InputStreamReader.<init>(java.io.InputStream)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client"
          ],
          "api": {
              "Name": "java.util.TimerTask.<init>()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "java.util.Timer.<init>()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.app.Activity.onPause()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.io.DataOutputStream.writeBytes(java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client.transaction"
          ],
          "api": {
              "Name": "java.util.Date.<init>()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "java.lang.String.getBytes(java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "android.os.Message.sendToTarget()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "java.lang.Class.desiredAssertionStatus()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client",
              "getjar.android.client.transaction",
              "getjar.android.sdk",
              "getjar.android.client.data",
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "java.lang.String.format([Ljava.lang.Object,java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client",
              "getjar.android.sdk",
              "getjar.android.client.transaction",
              "getjar.android.client.data"
          ],
          "api": {
              "Name": "java.lang.System.currentTimeMillis()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "java.io.IOException.printStackTrace()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client",
              "getjar.android.client.data"
          ],
          "api": {
              "Name": "java.lang.String.trim()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client",
              "getjar.android.client.transaction"
          ],
          "api": {
              "Name": "java.lang.Boolean.valueOf(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.util.Date.<init>(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client",
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "java.net.URL.<init>(java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.widget.ProgressBar.setMax(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.data"
          ],
          "api": {
              "Name": "android.database.sqlite.SQLiteDatabase.setTransactionSuccessful()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.webkit.WebView.setWebChromeClient(android.webkit.WebChromeClient)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.os.Bundle.putString(java.lang.String,java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.io.File.mkdirs()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.data"
          ],
          "api": {
              "Name": "android.database.sqlite.SQLiteDatabase.execSQL(java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "java.lang.Math.max(long,long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.data"
          ],
          "api": {
              "Name": "android.database.sqlite.SQLiteDatabase.update([Ljava.lang.String,java.lang.String,android.content.ContentValues,java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.lang.StringBuffer.append(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "android.content.Intent.setClassName(java.lang.String,java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.transaction"
          ],
          "api": {
              "Name": "java.lang.Error.<init>(java.lang.Throwable)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.content.pm.PackageManager.queryIntentActivities(long,android.content.Intent)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client",
              "getjar.android.sdk",
              "getjar.android.client.transaction",
              "getjar.android.client.data",
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "java.lang.String.length()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.content.Intent.setAction(java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.data"
          ],
          "api": {
              "Name": "android.content.ContentValues.put(java.lang.Long,java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.data"
          ],
          "api": {
              "Name": "java.lang.String.hashCode()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.widget.TextView.setTextSize(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "java.io.FileWriter.flush()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.util.Timer.purge()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.os.Bundle.getString(java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.app.Activity.onResume()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client.transaction",
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "java.lang.StringBuilder.append(java.lang.Object)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "javax.crypto.spec.SecretKeySpec.<init>(java.lang.String,long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client"
          ],
          "api": {
              "Name": "java.io.File.delete()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.lang.Thread.UncaughtExceptionHandler.uncaughtException(java.lang.Throwable,java.lang.Thread)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "java.net.HttpURLConnection.getContentLength()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.util.concurrent.Callable.call()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "javax.xml.parsers.DocumentBuilderFactory.newDocumentBuilder()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client"
          ],
          "api": {
              "Name": "java.io.FileOutputStream.<init>(java.io.File)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.data"
          ],
          "api": {
              "Name": "android.content.ContentValues.put(java.lang.Integer,java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.lang.SecurityException.printStackTrace()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "java.lang.Double.<init>(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "java.io.IOException.getMessage()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client",
              "getjar.android.client.data"
          ],
          "api": {
              "Name": "java.util.HashMap.keySet()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "android.content.Intent.putExtra(long,java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.lang.String.toString()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "android.webkit.WebViewClient.<init>()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "java.io.ObjectOutputStream.<init>(java.io.OutputStream)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.transaction"
          ],
          "api": {
              "Name": "java.lang.Error.getMessage()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.webkit.WebView.goBack()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "java.lang.Thread.<init>(java.lang.String,java.lang.Runnable,java.lang.ThreadGroup)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.data"
          ],
          "api": {
              "Name": "android.database.sqlite.SQLiteDatabase.insert(android.content.ContentValues,java.lang.String,java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.io.DataOutputStream.write(long,long,long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.content.SharedPreferences.contains(java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.util.Log.d(java.lang.String,java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client",
              "getjar.android.client.transaction",
              "getjar.android.client.data"
          ],
          "api": {
              "Name": "java.lang.Integer.intValue()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.lang.Thread.currentThread()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "android.content.pm.ApplicationInfo.loadLabel(android.content.pm.PackageManager)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.io.FileReader.<init>(java.io.File)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.os.Bundle.containsKey(java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "java.util.zip.GZIPOutputStream.<init>(java.io.OutputStream)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client",
              "getjar.android.sdk",
              "getjar.android.client.transaction",
              "getjar.android.client.data",
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "java.lang.StringBuilder.append(java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "android.content.IntentFilter.addDataScheme(java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.lang.Thread.<init>(java.lang.String,java.lang.Runnable)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.net.InetAddress.getHostAddress()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.widget.ViewFlipper.showNext()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.widget.LinearLayout.setLayoutParams(android.view.ViewGroup.LayoutParams)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.lang.Long.longValue()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.net.Uri.parse(java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.data"
          ],
          "api": {
              "Name": "java.lang.Enum.<init>(long,java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "java.io.File.length()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.util.Timer.<init>(java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.webkit.WebView.getContext()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client",
              "getjar.android.client.data"
          ],
          "api": {
              "Name": "java.lang.String.endsWith(java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.lang.Thread.getStackTrace()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.widget.TextView.<init>(android.content.Context)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client",
              "getjar.android.client.transaction"
          ],
          "api": {
              "Name": "java.util.Map.keySet()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.lang.Thread.getDefaultUncaughtExceptionHandler()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.util.Collection.iterator()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client",
              "getjar.android.client.transaction",
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "java.lang.String.equalsIgnoreCase(java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "javax.xml.parsers.DocumentBuilderFactory.newInstance()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.io.DataOutputStream.flush()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.content.SharedPreferences.Editor.putLong(long,java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client"
          ],
          "api": {
              "Name": "java.util.Properties.load(java.io.InputStream)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.lang.Throwable.getStackTrace()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client.data"
          ],
          "api": {
              "Name": "java.util.HashMap.<init>()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "java.io.OutputStream.write(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.content.ContentProvider.<init>()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "android.content.SharedPreferences.getString(java.lang.String,java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.view.LayoutInflater.from(android.content.Context)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.app.AlertDialog.Builder.setMessage(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.os.Bundle.getBoolean(long,java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.content.DialogInterface.cancel()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "java.net.URL.getQuery()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "javax.net.ssl.HttpsURLConnection.connect()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "java.lang.IllegalArgumentException.<init>(java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.nio.channels.FileChannel.size()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "java.io.FileWriter.close()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.io.StringWriter.<init>()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client"
          ],
          "api": {
              "Name": "java.util.List.get(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client",
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "java.lang.String.<init>(java.lang.String,long,long,long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.test.suitebuilder.TestSuiteBuilder.<init>(java.lang.Class)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "android.os.Handler.sendMessage(android.os.Message)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "java.io.ByteArrayOutputStream.toByteArray()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "java.nio.ByteBuffer.put(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "java.net.HttpURLConnection.getHeaderField(java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "java.lang.String.toLowerCase()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.content.Intent.addFlags(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.widget.ViewFlipper.setInAnimation(android.view.animation.Animation)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.io.BufferedReader.readLine()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.lang.reflect.Method.getParameterTypes()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client",
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.content.BroadcastReceiver.<init>()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.widget.ProgressBar.setLayoutParams(android.view.ViewGroup.LayoutParams)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.app.AlertDialog.Builder.setCancelable(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.view.LayoutInflater.inflate(android.view.ViewGroup,long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "java.io.FileWriter.write(java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "java.io.ByteArrayOutputStream.close()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.app.Activity.onActivityResult(android.content.Intent,long,long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.webkit.WebView.reload()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client"
          ],
          "api": {
              "Name": "java.net.HttpURLConnection.setDoOutput(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "java.io.FilterInputStream.<init>(java.io.InputStream)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client",
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.content.Intent.setFlags(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.content.pm.PackageManager.getPackageArchiveInfo(long,java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.data"
          ],
          "api": {
              "Name": "android.database.sqlite.SQLiteDatabase.rawQuery([Ljava.lang.String,java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "android.content.Context.getContentResolver()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.lang.Throwable.getCause()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client",
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.content.Intent.putExtra(java.lang.String,java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.io.FileOutputStream.getChannel()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "java.net.URL.getProtocol()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "android.telephony.TelephonyManager.getDeviceId()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.lang.Class.getMethods()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client"
          ],
          "api": {
              "Name": "java.io.FileInputStream.close()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.view.View.getTag()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.io.FileInputStream.<init>(java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client",
              "getjar.android.client.transaction",
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.content.res.Resources.getString(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.io.File.renameTo(java.io.File)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "android.net.ConnectivityManager.getActiveNetworkInfo()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client",
              "getjar.android.client.data"
          ],
          "api": {
              "Name": "java.lang.Integer.toString(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.io.DataOutputStream.<init>(java.io.OutputStream)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client"
          ],
          "api": {
              "Name": "java.net.URL.openConnection()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "java.io.ByteArrayOutputStream.<init>()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.content.Context.openFileOutput(long,java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "android.content.SharedPreferences.Editor.putBoolean(long,java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "java.lang.ArrayIndexOutOfBoundsException.<init>()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.view.Window.setFlags(long,long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.net.HttpURLConnection.getOutputStream()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client",
              "getjar.android.client.transaction",
              "getjar.android.sdk",
              "getjar.android.client.data",
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "java.lang.StringBuilder.toString()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.provider.Settings.Secure.getInt(long,java.lang.String,android.content.ContentResolver)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.lang.StringBuilder.delete(long,long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "java.io.FileOutputStream.flush()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.os.Bundle.<init>()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.webkit.WebView.setScrollBarStyle(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.widget.LinearLayout.setPadding(long,long,long,long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "java.lang.String.toLowerCase(java.util.Locale)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client",
              "getjar.android.client.data",
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "java.lang.String.split(java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.net.SocketException.printStackTrace()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client",
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.widget.TextView.setText(java.lang.CharSequence)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "java.io.File.canWrite()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "java.lang.Math.min(long,long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.content.res.Resources.getDisplayMetrics()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "java.io.ObjectOutputStream.writeObject(java.lang.Object)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.lang.Throwable.printStackTrace(java.io.PrintWriter)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.app.ProgressDialog.show(long,java.lang.CharSequence,java.lang.CharSequence,android.content.Context)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "java.lang.Double.intValue()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "java.lang.AssertionError.<init>(java.lang.Object)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client",
              "getjar.android.client.transaction",
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "java.util.Map.get(java.lang.Object)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "java.util.ArrayList.size()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.net.HttpURLConnection.setRequestProperty(java.lang.String,java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.webkit.WebView.loadUrl(java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client",
              "getjar.android.client.data"
          ],
          "api": {
              "Name": "java.lang.String.substring(long,long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "javax.xml.parsers.DocumentBuilder.parse(java.io.InputStream)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.data"
          ],
          "api": {
              "Name": "android.database.sqlite.SQLiteDatabase.query(java.lang.String,java.lang.String,java.lang.String,[Ljava.lang.String,java.lang.String,[Ljava.lang.String,java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "java.lang.String.indexOf(java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client",
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.net.NetworkInfo.toString()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.data"
          ],
          "api": {
              "Name": "android.database.Cursor.getLong(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.content.Intent.addCategory(java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "android.app.ActivityManager.getRunningTasks(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "java.io.ObjectInputStream.readObject()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "java.lang.StringBuilder.append(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.content.Intent.setComponent(android.content.ComponentName)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client.transaction"
          ],
          "api": {
              "Name": "java.net.URLEncoder.encode(java.lang.String)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "javax.crypto.Cipher.doFinal(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "java.io.InputStream.read(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.content.Context.getPackageManager()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "android.os.StatFs.getBlockSize()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.view.MenuItem.getItemId()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "java.net.HttpURLConnection.connect()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.lang.Thread.setDefaultUncaughtExceptionHandler(java.lang.Thread.UncaughtExceptionHandler)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.io.File.getPath()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.util.List.indexOf(java.lang.Object)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "java.lang.Boolean.booleanValue()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client"
          ],
          "api": {
              "Name": "android.content.Context.getApplicationContext()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "java.lang.String.replace(java.lang.CharSequence,java.lang.CharSequence)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global",
              "getjar.android.client",
              "getjar.android.sdk"
          ],
          "api": {
              "Name": "java.lang.StringBuilder.append(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.util.TimerTask.cancel()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client"
          ],
          "api": {
              "Name": "java.util.UUID.toString()",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "java.util.List.contains(java.lang.Object)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.global"
          ],
          "api": {
              "Name": "android.content.pm.PackageManager.resolveActivity(long,android.content.Intent)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      },
      {
          "packages": [
              "getjar.android.client.ui"
          ],
          "api": {
              "Name": "android.app.Activity.onCreateDialog(long)",
              "IntroduceTag": null,
              "RemoveTag": null
          }
      }
  ],
  "Name": "GetJar",
  "SHA256": "4d67c599a6f0356353eb52d56914484345edf5c28ab099d3e06174a085eb62d8",
  "Size": 125568,
  "Package Name": null,
  "Permissions": [
      {
          "Name": "android.permission.WRITE_EXTERNAL_STORAGE",
          "Generic Name": "Write External Storage"
      },
      {
          "Name": "android.permission.GET_PACKAGE_SIZE",
          "Generic Name": "Get Package Size"
      },
      {
          "Name": "android.permission.WAKE_LOCK",
          "Generic Name": "Wake Lock"
      },
      {
          "Name": "android.permission.READ_PHONE_STATE",
          "Generic Name": "Read Phone State"
      },
      {
          "Name": "android.permission.GET_TASKS",
          "Generic Name": "Get Tasks"
      },
      {
          "Name": "android.permission.ACCESS_NETWORK_STATE",
          "Generic Name": "Access Network State"
      },
      {
          "Name": "android.permission.INTERNET",
          "Generic Name": "Internet"
      },
      {
          "Name": "android.permission.RECEIVE_BOOT_COMPLETED",
          "Generic Name": "Receive Boot Completed"
      }
  ],
  "Minimum SDK": null,
  "Certificate(Owner)": {
      "Common Name": "Rimvydas",
      "Email Address": null,
      "Organization Unit": "GetJar Baltic",
      "Organization": "GetJar Inc",
      "Locality": "Vilnius",
      "State/Province": "Vilnius",
      "Country": "LT"
  },
  "Certificate(Fingerprint)": {
      "Name": "81:90:21:9D:D0:CD:28:A3:F0:5E:84:6B:FA:ED:6D:93:86:BE:86:3C:F9:27:73:7B:50:29:A1:3F:88:4E:E8:99"
  },
  "Version Code": 3510325,
  "Version Name": "3.5.10.325"
};

export default class ApkComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    }
    this.handleExpandClick = this.handleExpandClick.bind(this);
  }

  handleExpandClick() {
    const newState = !this.state.expanded;
    this.setState({expanded: newState});
  }

  render() {
    const classes = {
      expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: "transform 1s",
      },
      expandOpen: {
        transform: 'rotate(180deg)',
        marginLeft: 'auto',
        transition: "transform 1s",
      },
    };
    const { expanded } = this.state;
    const { data } = this.props;

    return (
      <div style={{width: '100%', margin: '10px auto'}}>
        { data ?
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                {data.Name}
              </Typography>
              <Typography color="textSecondary">
                {`SHA256: ${data.SHA256}`}
              </Typography>
              <Typography color="textSecondary">
                {`Certificate: ${data["Certificate(Fingerprint)"]["Name"]}`}
              </Typography>
              <Typography color="textSecondary">
                {`Size: ${data.Size} bytes`}
              </Typography>
              <Typography color="textSecondary">
                {data["Minimum SDK"] ? `SDK Version: ${data["Minimum SDK"]["Api Level"]}` : null}
              </Typography>
              <Typography color="textSecondary">
                {`Number of permissions: ${data.Permissions.length}`}
              </Typography>
              <Typography color="textSecondary">
                {`Number of apis: ${data.apiPackageRelationships.length}`}
              </Typography>
              <Typography color='error' variant="body2" component="p">
                {`Number of removed apis used in the apk: ${data.NumberOfRemovedApis}`}
              </Typography>
            </CardContent>
          </Card>
        : null
        }
      </div>
    )
  }
}
