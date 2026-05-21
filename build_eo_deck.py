from pptx import Presentation
from pptx.util import Inches, Pt, Emu
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN
from pptx.enum.shapes import MSO_SHAPE

INK = RGBColor(0x1A, 0x1A, 0x1A)
MUTED = RGBColor(0x6B, 0x6B, 0x6B)
ACCENT_BAD = RGBColor(0xC8, 0x3E, 0x3E)
ACCENT_GOOD = RGBColor(0x2E, 0x7D, 0x32)
PAPER = RGBColor(0xFA, 0xF7, 0xF2)

prs = Presentation()
prs.slide_width = Inches(13.333)
prs.slide_height = Inches(7.5)
BLANK = prs.slide_layouts[6]

W = prs.slide_width
H = prs.slide_height


def add_bg(slide, color=PAPER):
    bg = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, 0, W, H)
    bg.line.fill.background()
    bg.fill.solid()
    bg.fill.fore_color.rgb = color
    # send to back
    spTree = bg._element.getparent()
    spTree.remove(bg._element)
    spTree.insert(2, bg._element)
    return bg


def add_text(slide, left, top, width, height, text, size, bold=False,
             color=INK, align=PP_ALIGN.LEFT, font="Helvetica Neue"):
    tb = slide.shapes.add_textbox(left, top, width, height)
    tf = tb.text_frame
    tf.word_wrap = True
    tf.margin_left = 0
    tf.margin_right = 0
    tf.margin_top = 0
    tf.margin_bottom = 0
    p = tf.paragraphs[0]
    p.alignment = align
    run = p.add_run()
    run.text = text
    run.font.name = font
    run.font.size = Pt(size)
    run.font.bold = bold
    run.font.color.rgb = color
    return tb


def add_rule(slide, left, top, width, color=INK, weight=1.5):
    line = slide.shapes.add_connector(1, left, top, left + width, top)
    line.line.color.rgb = color
    line.line.width = Pt(weight)
    return line


def slide_title():
    s = prs.slides.add_slide(BLANK)
    add_bg(s)
    add_text(s, Inches(0.9), Inches(1.0), Inches(2), Inches(0.4),
             "EO FORUM", 12, bold=True, color=MUTED)
    add_text(s, Inches(0.9), Inches(2.4), Inches(11.5), Inches(2),
             "5 best.", 96, bold=True, color=INK)
    add_text(s, Inches(0.9), Inches(3.7), Inches(11.5), Inches(2),
             "5 worst.", 96, bold=True, color=ACCENT_BAD)
    add_text(s, Inches(0.9), Inches(5.6), Inches(11.5), Inches(0.5),
             "Decisions I made running my companies.", 18, color=MUTED)
    add_rule(s, Inches(0.9), Inches(6.4), Inches(2), color=INK, weight=2)


def slide_section(label, color):
    s = prs.slides.add_slide(BLANK)
    add_bg(s)
    add_text(s, Inches(0.9), Inches(1.0), Inches(4), Inches(0.4),
             "SECTION", 12, bold=True, color=MUTED)
    add_text(s, Inches(0.9), Inches(2.8), Inches(11.5), Inches(2.5),
             label, 84, bold=True, color=color)
    add_rule(s, Inches(0.9), Inches(5.7), Inches(2), color=color, weight=2)


def slide_decision(number, total, kind, headline, body_lines, accent):
    s = prs.slides.add_slide(BLANK)
    add_bg(s)

    # top label
    add_text(s, Inches(0.9), Inches(0.8), Inches(6), Inches(0.4),
             f"{kind.upper()}   {number} / {total}", 12, bold=True, color=accent)
    add_rule(s, Inches(0.9), Inches(1.15), Inches(1.2), color=accent, weight=2)

    # big headline
    add_text(s, Inches(0.9), Inches(1.6), Inches(11.5), Inches(2.2),
             headline, 54, bold=True, color=INK)

    # body
    top = Inches(4.4)
    for line in body_lines:
        add_text(s, Inches(0.9), top, Inches(11.5), Inches(0.6),
                 line, 22, color=INK)
        top += Inches(0.65)

    # footer number watermark
    add_text(s, Inches(11.2), Inches(6.5), Inches(1.5), Inches(0.6),
             f"0{number}", 36, bold=True, color=accent, align=PP_ALIGN.RIGHT)


def slide_mirror():
    s = prs.slides.add_slide(BLANK)
    add_bg(s)
    add_text(s, Inches(0.9), Inches(0.8), Inches(8), Inches(0.4),
             "ONE PATTERN", 12, bold=True, color=MUTED)
    add_rule(s, Inches(0.9), Inches(1.15), Inches(1.2), color=INK, weight=2)

    add_text(s, Inches(0.9), Inches(1.6), Inches(11.5), Inches(1.5),
             "Best and worst mirror each other.", 44, bold=True, color=INK)

    # two columns
    col_w = Inches(5.5)
    left_x = Inches(0.9)
    right_x = Inches(7.0)
    top = Inches(3.6)

    add_text(s, left_x, top, col_w, Inches(0.5),
             "WORST", 14, bold=True, color=ACCENT_BAD)
    add_text(s, left_x, top + Inches(0.5), col_w, Inches(1.5),
             "Too cautious with raises. Treat everyone the same. Lose the best one.",
             20, color=INK)

    add_text(s, right_x, top, col_w, Inches(0.5),
             "BEST", 14, bold=True, color=ACCENT_GOOD)
    add_text(s, right_x, top + Inches(0.5), col_w, Inches(1.5),
             "See exceptional? Double the salary this week. No hesitation. Same on the way down.",
             20, color=INK)

    add_text(s, Inches(0.9), Inches(6.4), Inches(11.5), Inches(0.5),
             "Move fast on people. Both directions.", 18, bold=True, color=MUTED)


def slide_close():
    s = prs.slides.add_slide(BLANK)
    add_bg(s)
    add_text(s, Inches(0.9), Inches(0.8), Inches(4), Inches(0.4),
             "TAKEAWAY", 12, bold=True, color=MUTED)
    add_rule(s, Inches(0.9), Inches(1.15), Inches(1.2), color=INK, weight=2)

    add_text(s, Inches(0.9), Inches(2.4), Inches(11.5), Inches(1.5),
             "Trust your read.", 72, bold=True, color=INK)
    add_text(s, Inches(0.9), Inches(3.7), Inches(11.5), Inches(1.5),
             "Act on it fast.", 72, bold=True, color=ACCENT_GOOD)

    add_text(s, Inches(0.9), Inches(6.0), Inches(11.5), Inches(0.5),
             "Thank you.", 22, color=MUTED)


# ---------- BUILD ----------
slide_title()

# WORST
slide_section("The worst.", ACCENT_BAD)

slide_decision(
    1, 3, "worst",
    "Too socialist with rewards.",
    [
        "Someone was performing 3x better than the rest.",
        "I gave him a small raise — like everyone else.",
        "He left.",
    ],
    ACCENT_BAD,
)

slide_decision(
    2, 3, "worst",
    "Letting the momentum run me.",
    [
        "Things going well → I assumed forever, or about to end.",
        "So I diversified instead of doubling down.",
        "Got blindsided. Up and down.",
    ],
    ACCENT_BAD,
)

slide_decision(
    3, 3, "worst",
    "Too slow to fire.",
    [
        "Couldn't find a reason that felt \"legitimate\" enough.",
        "Couldn't say: this isn't the company I want to build.",
        "Kept the wrong people too long.",
    ],
    ACCENT_BAD,
)

# BEST
slide_section("The best.", ACCENT_GOOD)

slide_decision(
    1, 2, "best",
    "Reward fast. No hesitation.",
    [
        "Someone shows up at another level → double the salary this week.",
        "Don't wait. Don't \"a bit more than the others.\"",
        "Same logic when someone is underperforming.",
    ],
    ACCENT_GOOD,
)

slide_decision(
    2, 2, "best",
    "A naive, simple partnership.",
    [
        "\"I do what I like. You do the rest.\"",
        "Broke every rule people tell you about partnerships.",
        "Goodwill on both sides. Still working.",
    ],
    ACCENT_GOOD,
)

slide_mirror()
slide_close()

out = "/home/user/ai-experiments/EO_Forum_5_Best_5_Worst.pptx"
prs.save(out)
print(f"saved: {out}")
print(f"slides: {len(prs.slides)}")
