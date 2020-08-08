#simple class implementation

class User:
    def __init__(self,name,age):
        self.name = name
        self.age = age
        self.likestodo = []

    def isAdult(self):
        if self.age > 18:
            return True
        else:
            return False
    
    def sayName(self):
        print('Name of the user is '+self.name)
    
    def sayAge(self):
        print('Age of '+self.name+' is '+ str(self.age))
    
    def addLikes(self,item):
        self.likestodo.append(item)
    
    def getLikes(self):
        print(self.likestodo)


usr = User("Sudharsanan",29)
usr.addLikes("Chocolates")
usr.addLikes("Coca Cola")
usr.sayName()
usr.sayAge()
print(usr.isAdult())
usr.getLikes()