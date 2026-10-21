Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/jammy64"
  config.vm.hostname = "garderie-vm"

  # Réseau privé avec IP fixe
  config.vm.network "private_network", ip: "192.168.56.10"

  config.vm.provider "virtualbox" do |vb|
    vb.name   = "garderie-vm"
    vb.memory = 2048
    vb.cpus   = 2
  end

  # Installation d'Ansible depuis les dépôts Ubuntu (sans PPA)
  config.vm.provision "shell", name: "install-ansible", inline: <<-SHELL
    if ! command -v ansible-playbook >/dev/null 2>&1; then
      rm -f /etc/apt/sources.list.d/ansible-ubuntu-ansible-jammy.list*
      rm -f /etc/apt/trusted.gpg.d/ansible-ubuntu-ansible.gpg*
      apt-get update -qq
      DEBIAN_FRONTEND=noninteractive apt-get install -y ansible
    fi
  SHELL

  # Provisioning avec Ansible (exécuté dans la VM)
  config.vm.provision "ansible_local" do |ansible|
    ansible.install        = false
    ansible.playbook       = "ansible/site.yml"
    ansible.inventory_path = "ansible/inventory.ini"
    ansible.limit          = "all"
  end
end