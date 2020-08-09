import os
import time
 
path = r"E:\mid_surfsedev\agent\export\syslog" #folder path
now = time.time() #current time

for entry in os.scandir(path):
    filepath = path+'\\'+entry.name #absolute file path
    fileupdated = os.path.getmtime(filepath) #file last updated
    timediff = now - fileupdated #time diff in epoch

    if entry.is_file(): #Extra validation to check if that's a file
        if(timediff > 172800): #Any files created minimum 2 days before
            print('file path: '+filepath)
            #print('file removed: '+filepath)
            #os.remove(filepath)