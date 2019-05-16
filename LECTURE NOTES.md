# Deployment with Google Cloud Compute Engine


### Resources
* _


### Learning Goals

* Describe and give examples of "platform as a service" products
* Recognize the basic components of a VM instance
* Use `npm build` to create an optimized react build
* Install and boot a rails or node server on a remote VM using an SSH terminal



### Activation

* 



### Learning Goal 1: Use `npm build` to create an optimized react build

##### Timestamp: _

##### Demonstrate

* In Node: 

  * `app.use(express.static('public'))`

* In Rails

  * ```
    get '*path', to: "application#react_app", constraints: ->(request) do
    	!request.xhr? && request.format.html?
    end
    ```

  * ```
    def react_app
    	render :file => 'public/index.html'
    end
    ```

##### Vocabulary

- 

##### Questions 

##### Check for Understanding

- *Self Assessment*

##### Cue

- 



### Learning Goal 2: Describe and give examples of "platform as a service" products

##### Timestamp: _

##### Demonstrate
* The different "Platform as a service"

* Set up a Google Cloud Account

  - You can sign up for an account or use

    joshua+events@flatironschool.com

    (events120518)

    - Signing up for an account will require a credit card
    - It's going to promise you a free trial (but you may have to wave that)
    - The product we will be using doesn't charge you anyway

##### Vocabulary
* 

##### Questions 

##### Check for Understanding
* *Self Assessment*

##### Cue
* 



### Learning Goal 3: Recognize the basic components of a VM instance

##### Timestamp: _

##### Demonstrate

- Create a Google Cloud Compute Instance
  - Create a project
  - Compute Engine -> VM Instances -> Create Instance
    - Machine Type: Micro Instance
    - Boot Disk: Ubuntu 18.1
    - Allow HTTP traffic
    - Allow HTTPS traffic
  - Review options
    - select a micro instance
    - select Ubuntu 18.1
      - 744 hours free === 1 month
    - Turn on HTTP and HTTPS access

##### Vocabulary

- 

##### Questions 

##### Check for Understanding

- *Self Assessment*

##### Cue

- 



### Learning Goal 4: Install and boot a rails or node server on a remote VM using an SSH terminal

##### Timestamp: _

##### Demonstrate

- Install Node.js on the instance

  - SSH in

  - ```
    curl -sL https://deb.nodesource.com/setup_11.x | sudo -E bash -
    sudo apt-get install -y nodejs
    ```

- Install our application on the instance

  - Copy the github link
    - `https://github.com/Joshua-Miles/google-cloud-compute-120518.git`
  - Clone it
  - Install dependencies with npm

##### Vocabulary

- 

##### Questions 

##### Check for Understanding

- *Self Assessment*

##### Cue

- 



### Conclusion 
* 





## Automated Deployment

- Install nodemon
- Install child-process-promise
- Add a handler for the `/deploy` endpoint which uses the child-process-promise.exec function to pull updates to the google
- Add `http://<your IP>/deploy` as a GitHub web hook for the repository you want to autodeploy from.