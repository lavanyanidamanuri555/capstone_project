  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
            import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
            // TODO: Add SDKs for Firebase products that you want to use
            // https://firebase.google.com/docs/web/setup#available-libraries
          
            // Your web app's Firebase configuration
            // For Firebase JS SDK v7.20.0 and later, measurementId is optional
            const firebaseConfig = {
              
                   type: "service_account",
                   project_id: "capstone-5edd7",
                   private_key_id:"24fe57a008bba1e84751c569b4835d5cebaaeca9",
                   private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCbtysUBLSFAh0b\nF0I+K8tVmSGkkhRb0JoqOPCm3sCXKcEGLVo9g2H+RGj2gpfRljNbD+JSClEXA9I1\nAGn+eH4HNYDWmRuKV+Qe7BrH2wEcTCxbHMkY+EEV8khUl/hGNOTBW1MQsNZ/k1uz\nEQEaxJom8JsHDhnVrUQJaLiGdKWHqjurx3RXYP2vLzl27JCFAdxoBBeZQObqETgY\numNNFYdandJXFeNtMO2OAO0COY++W8Ewj47keZQxvzKWufj/j1yEdRTtP5RGsn89\nVUlccaQB91Pm0qb/X/mjOUaE88bpUH3IxWqZNDaGKwY+PJ2dNdqo8spij9dpL6Rj\nzWPD7WnfAgMBAAECggEABpZio6epTWEwAwfiXQf0Q6xFQJWPd+zkwLmE8MJGqn5x\nNIYxpZ2LxTp2qEsRCiRNCuKqo+bc1FjsiSJ52XKWfk6Uoz9560nZlDdP0Lmim+Rb\nEgWvOjeyZS/JQI7nSW0OamGnK3MXt/Dvda1X+x5rGQ+ft1Yw4JnCYZWFDOcdY5ZO\nnrvYxGEElZS1SgnsAcLoP1OCSPvrFlw1Q5pJNVVVn/bs+b599mDTY/H+e11TiyQx\nRnZhli66kfr43i2EjYLRNWWSjEXqQTVG62num5goXZFN+tgu6YVnVCqUdtGUjQkN\n2W4Xv04XUDDgupjIGQQhw4uWmV39uVYUk33m9NadxQKBgQDVZpzhkYHF0/ar1Lgn\nXkKaQ3kxUVjpeVeGDoKxvwcduxl9ZMdnUBihEPCRSO3XAOJ6bkrygwKFfLQBo4Vb\n0gJAk4FBVhWMzYj9+zPAgD+a1yQdpQA0KY5PoG/u3lTr6G4zLwvHJ7Gm+2klymoN\nG5w0XlyZsREfIXNjfuXomXtRBQKBgQC6zKvvaSQOwghR6nvfyRSq99Qce4DAnJqF\nUiRptPjDh7xijOEMWoR9uXZB1jbokqeLTbnrIxA39jqG8lbBvXfOOJ/9ta84ciRG\nszWdlkXkQiuSlCuTIj5bVap9hItuUGAESdw/dBw9+9nAvNANr4QQOtttr1zqqkZ8\n2/7waNuUkwKBgQCn+HHptv9/uJzDmdct3artA8kkAZTLiSBUO52xzNwMEdY5dhbi\nghAwz0WcBdx3zJF3rtK9WlOkwIhrdculf4MYU0J9LAYgYzO+Pnj4v7nQ5iDeWJ71\nb/Q9Rtp0GXqcicIb9Z7+robOGbwk69NX5/Cm49Ndghso9sp9eUf8Mrr3BQKBgHUe\nUkafA06FdTX28IfUyTKQg9r/zC/3gCJK6C2mm7nsZr7bWVangh5Zo72Pk4mqOYXr\ny7+Tkl2j8foeAyshofYYJqepvByF5By3y8vsJhIBMtSKNe/gLnyRb32XFtypZCoM\nLR1TrUlnmJVxTHjoLMMIQ/+3TWiMLfmm7WbKN7IlAoGALBWQNViTA7WSkoYOEvea\nAVwycHeyEbCgSEzSHirF0J5ZqmZ1SEz1iiEIrSSQZmOFOMl39sn2ZhcVC9OYZqEz\nipnMv+vKXMXHvqVpdSHsNnGxGWvq5FpeL53dzK+2p49JEQ/T29xTXahfxUSFlOe0\nqKBdhpwkorbmhiHJpAAhnmc=\n-----END PRIVATE KEY-----\n",
                   client_email: "firebase-adminsdk-cifn8@capstone-5edd7.iam.gserviceaccount.com",
                   client_id: "116822880343656420269",
                   auth_uri: "https://accounts.google.com/o/oauth2/auth",
                   token_uri: "https://oauth2.googleapis.com/token",
                   auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
                   client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-cifn8%40capstone-5edd7.iam.gserviceaccount.com",
                   universe_domain: "googleapis.com"


            };
          
          

  // Initialize Firebase
            const app = initializeApp(firebaseConfig);

   //get ref to database services
             const db = getDatabase(app);

             document.getElementById("submit").addEventListener('click', function(e){
              e.preventDefault();
              set(ref(db, 'user/' + document.getElementById("username").value),
              {
   
                username: document.getElementById("username").value,
                email: document.getElementById("email").value,
                PhoneNumber: document.getElementById("phone").value

              });
            })
                let loginSuccessful = false;

                document.getElementById("submit").addEventListener('click', function(e){
                e.preventDefault();
                set(ref(db, 'user/' + document.getElementById("username").value),
                {
                    username: document.getElementById("username").value,
                    email: document.getElementById("email").value,
                    PhoneNumber: document.getElementById("phone").value
                });

                // Assume login is successful if data is set successfully
                loginSuccessful = true;

                if (loginSuccessful) {
                    window.location.href = "https://aeolian-seed-join.glitch.me/";
                }
                });
    
