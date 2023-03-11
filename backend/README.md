Version:
  ruby: 3.2.0
  rails: 7.0.4

Start:
  - bundle install
  - rails db:migrate
  - rails s (run server at localhost:3000)
