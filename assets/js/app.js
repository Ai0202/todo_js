let removeIcon = '<i class="far fa-trash-alt fa-lg"></i>';
let doneIcon = '<i class="far fa-check-circle fa-lg"></i>';
let data;

//もしデータが保存されていれば
if (localStorage.getItem('todoList')) {
  //データを取り出す
  data = JSON.parse(localStorage.getItem('todoList'));

  //取得したデータを画面に表示する
  for (let taskName of data.not) {
    addTaskToDOM(taskName);
  }

} else { //そうでなければ
  //データの保存先を作成
  data = {
    not: [],
    done: []
  };
}

// Todoを画面に追加する処理

  //追加ボタンをクリック
  let add = document.getElementById('add');
  add.addEventListener('click', function() {
    //ユーザーが入力した内容を取得
    let taskName = document.getElementById('task').value;

    addTaskToDOM(taskName);

    //ユーザーが入力した内容を消す
    document.getElementById('task').value = '';

    //データ保存
    //配列にデータを追加
    //taskName
    //連想配列dataのnotに追加したい
    //末尾に追加するときのメソッド push
    data.not.push(taskName);

    //配列をDBに保存
    dataObjectUpdated();

  })

  //関数名 addTaskToDOM
  //引数にユーザーが入力したtaskを入れる
  //仮引数の名前はtaskName

// --------------関数---------------


  function addTaskToDOM(taskName) {
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
    remove.addEventListener('click', removeTask);

    //完了ボタン作成
    let done = document.createElement('button');
    done.classList.add('done');
    done.innerHTML = doneIcon;

    done.addEventListener('click', doneTask)

    //ユーザーが入力した内容を未完了一覧に追加
    buttons.appendChild(remove);
    buttons.appendChild(done);
    not.appendChild(buttons);
    document.getElementById('not-yet').appendChild(not);
  }

function removeTask() {
  let task = this.parentNode.parentNode;
  task.remove();
}

function doneTask() {
  let task = this.parentNode.parentNode;
  let id = task.parentNode.id;
  let value = task.textContent;

  //完了一覧に追加
  //未完了一覧から削除
  let target = document.getElementById('done');
  target.appendChild(task);

  //DBを更新
  data.not.splice(data.not.indexOf(value), 1);
  data.done.push(value);
  dataObjectUpdated();

}

function dataObjectUpdated() {
  localStorage.setItem('todoList', JSON.stringify(data));
}

//