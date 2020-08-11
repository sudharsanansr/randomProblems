import time
now = time.strftime("%Y-%m-%d %H:%M:%S")
txt_array = []
txt_array.append(str(now))
txt_array.append("Hello")
txt_array.append("World")
txt_array.append("!")
print("\n".join(txt_array))