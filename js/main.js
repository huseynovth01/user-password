
//*user password promise ile  yazilisi

// Bu fonksiyon, verilen kullanıcı adı ve şifreyi doğrular. Doğruysa başarılı mesajı, yanlışsa hata mesajı döner.

function validateUser(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'user' && password === '1234') {
        resolve("Giriş başarılı!");
      } else {
        reject("Kullanıcı adı veya şifre yanlış.");
      }
    }, 2000);
  });
}

// isledilmesi:
validateUser('user', '1234')
  .then(message => console.log(message))
  .catch(error => console.log(error));

  //-----------------------------------

  // *user password callback ile  yazilisi

  // function WithCallback(username, password, callback) {
  //   setTimeout(() => {
  //     if (username === 'user' && password === '1234') {
  //       callback("Giriş başarılı!");
  //     } else {
  //       callback("Kullanıcı adı veya şifre yanlış.");
  //     }
  //   }, 2000);
  // }
  
  // // isledilmesi:
  // WithCallback('user', '1234', (error, message) => {
  //   if (error) {
  //     console.log(error);
  //   } else {
  //     console.log(message);
  //   }
  // });

  //-----------------------------------

// * user password async ile  yazilisi

  // function withAsyncAwait(username, password) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if (username === 'user' && password === '1234') {
  //         resolve("Giriş başarılı!");
  //       } else {
  //         reject("Kullanıcı adı veya şifre yanlış.");
  //       }
  //     }, 2000);
  //   });
  // }
  
  // async function performAsyncOperation() {
  //   try {
  //     const message = await withAsyncAwait('user', '1234');
  //     console.log(message);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  
  // async funksiyaasini cagirmaq
  // performAsyncOperation();

    //--------------------------------