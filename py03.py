class Dog:
    def __init__(self,name):
        self.num_of_legs = 4
        self.name = name
    
    def whatdo(self):
        print("Woof Woof!")

    def sayName(self):
        print(self.name+' with '+str(self.num_of_legs)+' legs')

kruggie = Dog("Kruger")
kruggie.sayName()
kruggie.whatdo()