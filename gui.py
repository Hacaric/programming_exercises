import tkinter
from tkinter import filedialog


def gui_main():
    window = tkinter.Tk()
    window.title("Submit exercise solutions")
    window.geometry("800x600")
    window.config(background="white")

    label = tkinter.Label(window, text="Choose file: ", width=100, height=5, foreground="black")
    label.grid(column=1, row=1)
    window.mainloop()
