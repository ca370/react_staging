FROM gitpod/workspace-mysql

RUN sudo apt-get update  && sudo apt-get install -y     tool  && sudo rm -rf /var/lib/apt/lists/*