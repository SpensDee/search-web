function submitForm(selector) {
  document.querySelector(selector).addEventListener('submit', function (event) {
    event.preventDefault(); // Предотвращаем стандартное действие отправки формы

    if(!sessionStorage.submitted) {

  
    fetch('https://script.google.com/macros/s/AKfycbyHv9588BKVjTM3sxohBrY_JLs9eC2eyUb-qV1TFme5ztzqYu9CCkCc4UuuDhga3iUZHg/exec', {
      method: 'POST',
      // Ваши данные формы
      body: new FormData(this),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          // Ответ успешен, здесь вы можете отобразить вашу разметку
          alert('Ваша заявка успішно відправлена, Ваш менеджер невдовзі з Вами звʼяжеться')
          sessionStorage.setItem("submitted", "true");
          this.reset();
        } else {
          // Обработка ошибки, если необходимо
          alert('Произошла ошибка при отправке формы');
        }
      })
      .catch(error => {
        console.error('Ошибка отправки формы:', error);
        alert('Произошла ошибка при отправке формы');
      });
    } else {
      alert('Ваша заявка успішно відправлена, Ваш менеджер невдовзі з Вами звʼяжеться')
      this.reset();
      return
    }
  });
}

export default submitForm;


