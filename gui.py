import tkinter
from tkinter import filedialog

def gui_main():
    window = tkinter.Tk()
    window.title("Submit exercise solutions")
    window.geometry("800x600")
    window.config(background="white")

    label = tkinter.Label(window, text="Choose exercise: ")
    label.grid(column=1, row=1)
    exercise_option_current = tkinter.StringVar(window)
    exercise_option_current.set("Select exercise...")
    exercise_option_box = tkinter.OptionMenu(window, exercise_option_current, *[f"test{i}" for i in range(10)])
    exercise_option_box.grid(column=2, row=1)
    window.mainloop()
