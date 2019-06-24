# TypeScript × Express.js で簡単WebAPI開発
## テーマ
    TypeScriptとExpress.jsを使って、簡単にWebAPIを作ります。

## ひつようなモノ
- Node.js
- Express.js
- TypeScript
- @types/node

## パッケージを作る
1. ```package.json```(パッケージの名前、依存関係、コマンドなどを記述するファイル)を作ります。

        npm init

    ![パッケージを作る-1]

2. package nameは何も入力せずそのままEnterキーを押下します。

   ※ 未入力の場合、(package nameは)ディレクトリ名となります。

    ![パッケージを作る-2]

3. versionは何も入力せずそのままEnterキーを押下します。

   ※ 未入力の場合、 ```1.0.0``` となります。

    ![パッケージを作る-3]

4. descriptionは何も入力せずそのままEnterキーを押下します。

    ※ 未入力の場合、未設定となります。
           
    ![パッケージを作る-4]

5. entry pointは何も入力せずそのままEnterキーを押下します。

    ※ 未入力の場合、デフォルト値として```index.js```となります。

    ![パッケージを作る-5]

6. test commandは何も入力せずそのままEnterキーを押下します。

    ※ 未入力の場合、未設定となります。

    ![パッケージを作る-6]

7. git repositoryは何も入力せずそのままEnterキーを押下します。

    ※ 未入力の場合、未設定となります。

    ![パッケージを作る-7]

8. keywordsは何も入力せずそのままEnterキーを押下します。

    ※ 未入力の場合、未設定となります。

    ![パッケージを作る-8]

9. authorは何も入力せずそのままEnterキーを押下します。

    ※ 未入力の場合、未設定となります。

    ![パッケージを作る-9]

10. licenseは何も入力せずそのままEnterキーを押下します。

    ※ 未入力の場合、ISCとなります。

    ![パッケージを作る-10]

11. Is this OK? と表示されたら、そのままEnterキーを押下します。

    ![パッケージを作る-11]

    以上で、パッケージを作る作業は完了です。

### 補足
    - npmパッケージとして公開する場合は、ちゃんと入力したほうが良い。
    - 設定が済んでいても、package.jsonを編集することで後から変更もできる。

## Node.js、Express.jsのインストールおよび設定
1. ```Node.js```をインストールします。

    ```
    npm install node -g --save
    ```

    ![Node.js、Express.jsのインストールおよび設定-1]

2. ```Express.js```をインストールします。

    ```
    npm install express --save
    ```

    ![Node.js、Express.jsのインストールおよび設定-2]

3. ```@types/node```をインストールします。

    ```
    npm install @types/node --save
    ```

    ![Node.js、Express.jsのインストールおよび設定-3]

## TypeScriptのインストールおよび設定
1. TypeScriptをインストールします。

    ```cmd
    npm install typescript --save-dev
    ```

    ![Typescriptのインストールおよび設定-1]

2. src(ソースコードが入る)ディレクトリ、dist(トランスパイル後のjsが入る)ディレクトリを作成します。

    ```cmd
    mkdir src, dist
    ```

    ![Typescriptのインストールおよび設定-2]

3. ```tsconfig.json```(TypeScriptのビルド設定など記述するファイル)を作ります。

    ```json
    {
        "compilerOptions": {
            "outDir": "./dist",
            "sourceMap": true,
            "module": "es6",
            "target": "es5",
            "moduleResolution": "node",
            "removeComments": true,
            "types": ["node"]
        },
        "include": [
            "./src/**/*"
        ]
    }
    ```

4. ```package.json```にrunスクリプト、buildスクリプトを追加します。

    ```json
    "scripts": {
        "start": "tsc & node dist/index.js",
        "build": "tsc"
    }
    ```
    
5. ```src/index.ts```を作成して以下のスクリプトを記述します。

    ```javascript
    let express = require('express');
    let app = express();

    app.get('/', (req, res) => res.send('Hello world!'));

    app.listen(3000, () => console.log('listening on port 3000'));
    ```

6. ```src/index.ts```をトランスパイルして実行します。

    ```
    npm run start
    ```

    ![Typescriptのインストールおよび設定-3]

7. ブラウザで[http://localhost:3000](http://localhost:3000)にアクセスします。

    ![Typescriptのインストールおよび設定-4]

    以上で、Typescriptのインストールおよび設定は完了です。


## かんたんなAPIを作る
1. ```src/index.ts```に以下のスクリプトを記述します。

    ```typescript
    let express = require('express');
    let app = express();

    app.get('/api/v1/greet', (req, res) => {
        let obj = [
            { message: 'おはよう！' },
            { message: 'こんにちは！' },
            { message: 'こんばんは！' },
        ];

        res.json(obj);
    });
    ```

2. ```src/index.ts```をトランスパイルして実行します。

    ```
    npm run start
    ```

    ![Typescriptのインストールおよび設定-3]

3. ブラウザで[http://localhost:3000/api/v1/greet](http://localhost:3000/api/v1/greet)にアクセスします。

    ![かんたんなAPIを作る-1]

    以上で、API作りは完了です。

---

[パッケージを作る-1]:img/パッケージを作る/1.png
[パッケージを作る-2]:img/パッケージを作る/2.png
[パッケージを作る-3]:img/パッケージを作る/3.png
[パッケージを作る-4]:img/パッケージを作る/4.png
[パッケージを作る-5]:img/パッケージを作る/5.png
[パッケージを作る-6]:img/パッケージを作る/6.png
[パッケージを作る-7]:img/パッケージを作る/7.png
[パッケージを作る-8]:img/パッケージを作る/8.png
[パッケージを作る-9]:img/パッケージを作る/9.png
[パッケージを作る-10]:img/パッケージを作る/10.png
[パッケージを作る-11]:img/パッケージを作る/11.png
[パッケージを作る-12]:img/パッケージを作る/12.png
[Node.js、Express.jsのインストールおよび設定-1]:img/Node.js、Express.jsのインストールおよび設定/1.PNG
[Node.js、Express.jsのインストールおよび設定-2]:img/Node.js、Express.jsのインストールおよび設定/2.PNG
[Node.js、Express.jsのインストールおよび設定-3]:img/Node.js、Express.jsのインストールおよび設定/3.PNG
[Typescriptのインストールおよび設定-1]:img/Typescriptのインストールおよび設定/1.PNG
[Typescriptのインストールおよび設定-2]:img/Typescriptのインストールおよび設定/2.PNG
[Typescriptのインストールおよび設定-3]:img/Typescriptのインストールおよび設定/3.PNG
[Typescriptのインストールおよび設定-4]:img/Typescriptのインストールおよび設定/4.PNG
[かんたんなAPIを作る-1]:img/かんたんなAPIを作る/1.PNG