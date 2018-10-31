let removeIcon = '<i class="far fa-trash-alt fa-lg"></i>';
let doneIcon = '<i class="far fa-check-circle fa-lg"></i>';

// Todoを画面に追加する処理

  //追加ボタンをクリック
  let add = document.getElementById('add');
  add.addEventListener('click', function() {
    //ユーザーが入力した内容を取得
    let taskName = document.getElementById('task').value;

    //追加する要素を作成
    let not = document.createElement('li');
    // let text = document.createTextNode(taskName);
    // not.appendChild(text);
    not.textContent = taskName;

    //ボタンを表示する場所
    let buttons = document.createElement('div');
    buttons.classList.add('buttons');

    //削除ボタン作成
    let remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerHTML = removeIcon;

    //削除ボタンをクリック
    remove.addEventListener('click', function() {
      let task = this.parentNode.parentNode;

      task.remove();
    })

    //完了ボタン作成
    let done = document.createElement('button');
    done.classList.add('done');
    done.innerHTML = doneIcon;

    done.addEventListener('click', function() {
      let task = this.parentNode.parentNode;
      console.log(task);

      //完了一覧に追加
      let target = document.getElementById('done');
      target.appendChild(task);

      //未完了一覧から削除

    })

    //ユーザーが入力した内容を未完了一覧に追加
    buttons.appendChild(remove);
    buttons.appendChild(done);
    not.appendChild(buttons);
    document.getElementById('not-yet').appendChild(not);

    //ユーザーが入力した内容を消す
    document.getElementById('task').value = '';

  })



  //未完了を完了にする処理
  //完了ボタンをクリックする



  //未完了を削除する処理
  //削除ボタンをクリック
  //未完了一覧から削除