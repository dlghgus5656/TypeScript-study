interface LocalStorageAPI<T> {
    [key: string]: T;
 }
 
 abstract class LocalStorage5 {
 }
 
 class LocalStorage2<T> extends LocalStorage5 {
     private storage: LocalStorageAPI<T> = {};
     setItem(key: string, value: T) {
         this.storage[key] = value;
   }
   clearItem(key: string) {
     delete this.storage[key];
   }
 
   getItem(key: string): T {
     return this.storage[key];
   }
   clear() {
     this.storage = {};
   }
 }
 
 const localStorage2 = new LocalStorage2<string>();
 
 localStorage.setItem("김치", "한국음식")
 localStorage.getItem("김치")
 localStorage.clearItem("김치")
 localStorage.clear()

interface GeolocationAPI {
    undefined getCurrentPosition (
    PositionCallback successCallback,
    optional PositionErrorCallback? errorCallback = null,
    optional PositionOptions options = {}
 );

 long watchPosition (
    PositionCallback successCallback,
    optional PositionErrorCallback? errorCallback = null,
    optional PositionOptions options = {}
 );
 undefined clearWatch (long watchId);
};
class Geolocation5 implements GeolocationAPI {
 

geolocation.getCurrentPosition(successFn);
geolocation.getCurrentPosition(successFn, errorFn);
geolocation.getCurrentPosition(successFn, errorFn, optionsObj);
geolocation.watchPosition(success);
geolocation.watchPosition(success, error);
geolocation.watchPosition(success, error, options);
geolocation.clearWatch(id);