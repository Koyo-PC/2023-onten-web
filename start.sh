#!/bin/bash --login

cd `dirname $0`

screen -S onten2023 -X quit
git pull
screen -dmS onten2023 ruby app.rb
# ruby app.rb
