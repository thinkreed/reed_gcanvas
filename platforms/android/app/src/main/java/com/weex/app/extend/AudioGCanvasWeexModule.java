package com.weex.app.extend;

import android.support.annotation.UiThread;
import android.text.TextUtils;

import com.alibaba.weex.plugin.annotation.WeexModule;
import com.taobao.gcanvas.bridges.weex.GCanvasWeexModule;
import com.taobao.gcanvas.util.GLog;
import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.bridge.JSCallback;

import org.json.JSONArray;

@WeexModule(
        name = "gcanvas"
)
public class AudioGCanvasWeexModule extends GCanvasWeexModule {

    @JSMethod(
            uiThread = false
    )
    public void playMusic(String args, JSCallback callBack) {
        GLog.d("GCanvasWeexModule", "preLoadImage() in GCanvasWeexModule,args: " + args);
        if (!TextUtils.isEmpty(args)) {
            try {
                JSONArray dataArray = new JSONArray(args);

            } catch (Throwable var4) {
                GLog.e("GCanvasWeexModule", var4.getMessage(), var4);
            }

        }
    }
}
