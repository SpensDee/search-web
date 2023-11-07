function sendMessageToTelegram() {
    const chatId = '-6608137281';
    const botToken = '6608137281:AAHyPydu_IAJogDUEol2Ix8MeFEM82EfTWc';
    const formData = new FormData(document.getElementById('top_form'));

    // Создаем объект для хранения данных, которые будут отправлены в бота
    const messageData = {
      chat_id: chatId,
      text: 'Новая заявка из формы:\n\n' +
        `Тип: ${formData.get('type')}\n` +
        `Имя: ${formData.get('name')}\n` +
        `Телеграм: ${formData.get('telegram')}\n` +
        `Номер телефону: ${formData.get('tell')}`
    };

    // Отправляем данные в бота через API Телеграма
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(messageData),
    })
    .then(response => response.json())
    .then(data => {
      if (data.ok) {
        alert('Заявка успешно отправлена в Телеграм бота.');
        // Очистить форму после успешной отправки, если это необходимо
        document.getElementById('top_form').reset();
      } else {
        alert('Произошла ошибка при отправке заявки в Телеграм бота.');
      }
    })
    .catch(error => {
      console.error('Произошла ошибка:', error);
    });
  };