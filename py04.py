#simple class implementation

class User:
    def __init__(self,fname,lname,age):
        self.fname = fname
        self.lname = lname
        self.age = age
        self.likestodo = []

    def sayFullName(self):
        print("User full name is "+self.fname+" "+self.lname)

    def isAdult(self):
        if self.age > 18:
            return True
        else:
            return False
    
    def sayFirstName(self):
        print('First Name of the user is '+self.fname)

    def sayLastName(self):
        print('Last Name of the user is '+self.lname)

    def sayAge(self):
        print('Age of '+self.fname+' is '+ str(self.age))
    
    def addLikes(self,item):
        self.likestodo.append(item)
    
    def getLikes(self):
        print(self.likestodo)


#usr = User ("Sudharsanan","Ravichandran",29)
#usr.addLikes("Chocolates")
#usr.addLikes("Coca Cola")
#usr.sayFullName()
#usr.sayFirstName()
#usr.sayLastName()
#usr.sayAge()
#print(usr.isAdult())
#usr.getLikes()