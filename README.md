# Moticker
シフト管理アプリ(開発中)

## 開発準備
dockerのビルド

` docker-compose build `

dockerの起動

` docker-compose up -d `

appコンテナに入る

` docker-compose exec app bash `

appコンテナ内のlaravel-reactを開く

` cd laravel-react `

composerをインストールする

` composer update `

<!-- laravel/uiにReactを使用する

` php artisan ui react ` -->

storageへのアクセスを許可する

` chown www-data storage/ -R `

React用のnpmをインストールする

` npm update `
<!-- 
` npm i --save-dev laravel-mix@latest && 
npm i --save-dev sass-loader@latest && 
npm i --save-dev postcss@latest && 
npm i --save-dev webpack@latest ` -->

## サーバー
アプリサーバー

localhost:8080

phpmyadmin

localhost:4040
