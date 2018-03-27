package com.effectivepancake;

import android.support.annotation.NonNull;

import com.facebook.react.ReactPackage;
import com.reactnativenavigation.NavigationApplication;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {

  @Override
  public boolean isDebug() {
    return BuildConfig.DEBUG;
  }


  protected List<ReactPackage> getPackages() {
    // Add additional packages you require here
    // No need to add RnnPackage and MainReactPackage
    return Arrays.<ReactPackage>asList(
            // eg. new VectorIconsPackage()
    );
  }

  @NonNull
  @Override
  public List<ReactPackage> createAdditionalReactPackages() {
    return getPackages();
  }

  @NonNull
  @Override
  public String getJSMainModuleName() {
    return "index";
  }
}
