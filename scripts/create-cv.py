from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    Flowable,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
)


OUT = Path("public/collins-steve-njagi-cv.pdf")
OUT.parent.mkdir(parents=True, exist_ok=True)
INK = colors.HexColor("#141a20")
MUTED = colors.HexColor("#56616b")
GREEN = colors.HexColor("#3f7d2b")
LINE = colors.HexColor("#d9e1d5")

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="Section", parent=styles["Heading2"], fontName="Helvetica-Bold", fontSize=10, leading=12, textColor=GREEN, spaceBefore=10, spaceAfter=4, uppercase=True))
styles.add(ParagraphStyle(name="BodySmall", parent=styles["BodyText"], fontName="Helvetica", fontSize=9, leading=13, textColor=INK, spaceAfter=4))
styles.add(ParagraphStyle(name="BodyMuted", parent=styles["BodyText"], fontName="Helvetica", fontSize=8.7, leading=12, textColor=MUTED, spaceAfter=4))
styles.add(ParagraphStyle(name="RoleTitle", parent=styles["BodyText"], fontName="Helvetica-Bold", fontSize=9.4, leading=13, textColor=INK, spaceAfter=2))


class HeaderBand(Flowable):
    def __init__(self, width):
        super().__init__()
        self.width = width
        self.height = 35 * mm

    def draw(self):
        self.canv.setFillColor(INK)
        self.canv.roundRect(0, 0, self.width, self.height, 3 * mm, fill=1, stroke=0)
        self.canv.setFillColor(colors.HexColor("#b8f37b"))
        self.canv.rect(0, 0, 2.2 * mm, self.height, fill=1, stroke=0)
        self.canv.setFillColor(colors.white)
        self.canv.setFont("Helvetica-Bold", 23)
        self.canv.drawString(11 * mm, 25.7 * mm, "Collins Steve Njagi")
        self.canv.setFillColor(colors.HexColor("#d6e9cc"))
        self.canv.setFont("Helvetica", 9)
        self.canv.drawString(11 * mm, 18.5 * mm, "COMPUTER SCIENTIST  |  SOFTWARE DEVELOPER  |  NETWORK ENGINEER")
        self.canv.setFillColor(colors.HexColor("#eff3ed"))
        self.canv.setFont("Helvetica", 8)
        self.canv.drawString(11 * mm, 8 * mm, "Nairobi, Kenya  |  csnjagi@proton.me  |  github.com/csnjagi  |  linkedin.com/in/collins-njagia57984278")


def footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(LINE)
    canvas.line(18 * mm, 13 * mm, A4[0] - 18 * mm, 13 * mm)
    canvas.setFont("Helvetica", 7)
    canvas.setFillColor(MUTED)
    canvas.drawString(18 * mm, 8 * mm, "COLLINS STEVE NJAGI  |  NAIROBI, KENYA")
    canvas.drawRightString(A4[0] - 18 * mm, 8 * mm, "SOFTWARE  /  NETWORKS  /  SYSTEMS")
    canvas.restoreState()


doc = SimpleDocTemplate(
    str(OUT), pagesize=A4, rightMargin=18 * mm, leftMargin=18 * mm,
    topMargin=14 * mm, bottomMargin=18 * mm, title="Collins Steve Njagi - CV",
    author="Collins Steve Njagi", subject="Computer science, software development and IT operations",
)
content_width = A4[0] - 36 * mm
story = [HeaderBand(content_width), Spacer(1, 4 * mm)]
story += [
    Paragraph("PROFILE", styles["Section"]),
    Paragraph("Computer scientist with practical experience across software development, network engineering, systems administration and IT support. Interested in building scalable systems and solving business problems through technology, with a service-minded approach shaped by public-sector and banking attachments.", styles["BodySmall"]),
    Paragraph("EXPERIENCE", styles["Section"]),
    Paragraph("Communications Authority of Kenya  |  Industrial Attachment", styles["RoleTitle"]),
    Paragraph("Supported ICT operations including Windows deployment, Active Directory, Microsoft 365, domain administration, endpoint and hardware maintenance, printer and network troubleshooting, IP configuration, BitLocker recovery and user support. Gained exposure to telecommunications regulation, spectrum management, licensing, compliance, field technical inspections and stakeholder engagement.", styles["BodyMuted"]),
    Spacer(1, 2 * mm),
    Paragraph("Consolidated Bank of Kenya  |  Attachment, Quality Service Team", styles["RoleTitle"]),
    Paragraph("Developed experience in customer interaction, professional communication, service excellence and cross-functional collaboration, with exposure to banking operations and process improvement.", styles["BodyMuted"]),
    Paragraph("SELECTED PROJECTS", styles["Section"]),
    Paragraph("NeuroBudget  |  FastAPI, Python, SQLAlchemy, MariaDB, JavaScript", styles["RoleTitle"]),
    Paragraph("Personal finance application for income and expense tracking, financial summaries and analytics. The project README outlines spending anomaly analysis and an AI financial advisor.", styles["BodyMuted"]),
    Paragraph("Network Monitoring  |  FastAPI, Python, SQLAlchemy, Docker, SQLite / PostgreSQL", styles["RoleTitle"]),
    Paragraph("Network operations dashboard with scheduled device ping checks, latency and packet-loss history, role-based access, threshold alerts and CSV/PDF reports.", styles["BodyMuted"]),
    Paragraph("EDUCATION", styles["Section"]),
    Paragraph("Bachelor of Science in Computer Science  |  Moi University, Class of 2026", styles["RoleTitle"]),
    Paragraph("TECHNICAL TOOLKIT", styles["Section"]),
    Paragraph("<b>Programming:</b> Python, JavaScript, TypeScript, HTML, CSS, SQL  &nbsp; | &nbsp;  <b>Frameworks:</b> FastAPI, React, Next.js<br/><b>Databases:</b> MariaDB, MySQL, SQLite  &nbsp; | &nbsp;  <b>Networking:</b> TCP/IP, routing, switching, wireless, MikroTik, Huawei, Starlink deployments<br/><b>IT:</b> Windows administration, Microsoft 365, Active Directory, hardware and user support  &nbsp; | &nbsp;  <b>Tools:</b> Git, GitHub, VS Code, Linux", styles["BodySmall"]),
]
doc.build(story, onFirstPage=footer)
print(OUT)
