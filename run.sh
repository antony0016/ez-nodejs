sudo docker stop ez-nodejs
sudo docker rm ez-nodejs
sudo docker run -i -d -p 5678:5678 --name ez-nodejs ez-nodejs
sudo docker exec -it ez-nodejs bash
