package com.example.store;

import android.app.Activity;
import android.os.Bundle;
import org.apache.cordova.*;

public class MainActivity extends CordovaActivity {

	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		super.loadUrl("file:///android_asset/www/index.html");
	}

}