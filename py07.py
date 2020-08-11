import os
import time
import requests
 
path = r"E:\mid_surfsedev\agent\export\syslog" #folder path
now = time.time() #current time
files_removed = [] #array like counter to capture individual file path

for entry in os.scandir(path):  
    if entry.is_file(): #Extra validation to check if that's a file
        filepath = path+'\\'+entry.name #absolute file path
        fileupdated = os.path.getmtime(filepath) #file last updated
        timediff = now - fileupdated #time diff in epoch
        if(timediff > 600): #Any files created minimum 2 days before
            files_removed.append(filepath)
            #os.remove(filepath)

print("files removed: ",len(files_removed))
print("\n".join(files_removed))