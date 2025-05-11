#!/bin/bash

# Check if script is run as root
if [ "$(id -u)" != "0" ]; then
    echo "Error: This script must be run as root. Use sudo." >&2
    exit 1
fi

BACKUP_DIR="/backups"
mkdir -p "$BACKUP_DIR"

user_exists() {
    id "$1" &>/dev/null
}

show_system_info() {
    echo -e "\n=== System Information ==="
    echo "Hostname: $(hostname)"
    echo "Kernel: $(uname -r)"
    echo "Distribution: $(lsb_release -ds 2>/dev/null || cat /etc/*release 2>/dev/null | head -n1)"
    echo "Architecture: $(arch)"
}

list_users(){
    echo "Users with /bin/bash :"
    grep "/bin/bash" /etc/passwd | cut -d: -f1
}

search_user() {
    read -p "Enter username to search: " username
    if getent passwd "$username" >/dev/null; then
        echo "User '$username' exists."
    else
        echo "User '$username' does not exist." >&2
        return 1
    fi
}

add_user(){
    read -p "Enter new username: " user
    if user_exists "$user"; then
        echo "User '$user' already exists!"
    else
        sudo useradd -m "$user" && echo "Done! User '$user' added."
    fi
}

delete_user(){
    read -p "Enter username to delete: " user
    if user_exists "$user"; then
        sudo cp -r /home/"$user" "$BACKUP_DIR/$user-$(date +%F_%T)" 2>/dev/null
        sudo userdel -r "$user" && echo "User '$user' deleted with home backup."
    else
        echo "User '$user' does not exist."
    fi
}


show_user_details() {
    read -p "Enter username: " username
    if ! getent passwd "$username" >/dev/null; then
        echo "Error: User '$username' does not exist." >&2
        return 1
    fi
    
    echo -e "\n=== User Details ==="
    echo "Username: $username"
    echo "UID: $(id -u "$username")"
    echo "GID: $(id -g "$username")"
    echo "Groups: $(groups "$username" | cut -d: -f2)"
    echo "Home: $(getent passwd "$username" | cut -d: -f6)"
    echo "Shell: $(getent passwd "$username" | cut -d: -f7)"
    echo "Last login: $(lastlog -u "$username" | tail -1 | awk '{print $4,$5,$6,$7,$8}')"
}

change_password() {
    read -p "Enter username: " username
    if ! getent passwd "$username" >/dev/null; then
        echo "Error: User '$username' does not exist." >&2
        return 1
    fi
    passwd "$username"
}


lock_user() {
    read -p "Enter username to lock: " username
    if [[ -z "$username" ]]; then
        echo "ERROR: Username cannot be empty."
	 echo "ERROR: Lock user - Username empty."
        return
    fi

    if ! user_exists "$username"; then
        echo "ERROR: User '$username' does not exist."
         echo "ERROR: Lock user - User '$username' does not exist."
        return
    fi


    echo "Locking account for user '$username'..."
    if sudo passwd -l "$username"; then
        sudo chage -E 0 "$username" &>/dev/null
        echo "User '$username' account locked successfully."
         echo "SUCCESS: Account locked for user '$username'."
    else
        echo "ERROR: Failed to lock account for '$username'."
         echo "ERROR: Lock user - Failed for user '$username'."
    fi
}


unlock_user() {
    read -p "Enter username to unlock: " username
    if [[ -z "$username" ]]; then
        echo "ERROR: Username cannot be empty."
        echo "ERROR: Unlock user - Username empty."
        return
    fi

    if ! user_exists "$username"; then
        echo "ERROR: User '$username' does not exist."
        echo "ERROR: Unlock user - User '$username' does not exist."
        return
    fi

    echo "Unlocking account for user '$username'..."
    if sudo passwd -u "$username"; then
        sudo chage -E -1 "$username" &>/dev/null
        echo "User '$username' account unlocked successfully."
        echo "You might need to set a new password for the user if they forgot it."
        echo "SUCCESS: Account unlocked for user '$username'."
    else
        echo "ERROR: Failed to unlock account for '$username'."
        echo "ERROR: Unlock user - Failed for user '$username'."
    fi
}

while true; do
    clear
    echo "============================="
    echo "    User Management System   "
    echo "============================="
    echo "1. Show system information"
    echo "2. List users with /bin/bash shell"
    echo "3. Search for a user"
    echo "4. Add user"
    echo "5. Delete user (with home backup)"
    echo "6. Show user details"
    echo "7. Change user password"
    echo "8. Lock user"
    echo "9. Unlock user"
    echo "10. Exit"
    echo "============================="
    
    read -p "Enter your choice [1-10]: " choice
    case $choice in
        1) show_system_info ;;
        2) list_users ;;
        3) search_user ;;
        4) add_user ;;
        5) delete_user ;;
        6) show_user_details ;;
        7) change_password ;;
        8) lock_user ;;
        9) unlock_user ;;
        10) echo -e "\nExiting..."; exit 0 ;;
        *) echo -e "\nInvalid input. Please enter a number between 1-10." >&2 ;;
    esac
    
    read -p $'\nPress Enter to continue...'
done
