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

をインストールする

` composer update `

<!-- laravel/uiにReactを使用する

` php artisan ui react ` -->

storageへのアクセスを許可する

` chown www-data storage/ -R `

React用のnpmをインストールする

` npm install `

## サーバー
アプリサーバー

localhost:8080

phpmyadmin

localhost:4040
