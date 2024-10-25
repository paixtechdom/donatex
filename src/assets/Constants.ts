import surgerystaff from "./images/surgery staff.jpg"
import surgery from "./images/surgery.jpg"
import equipment from "./images/equipment.jpg"
import accident from "./images/accident.jpg"
import diseases from "./images/diseases.jpg"
import familyPlanning from "./images/familyPlanning.jpg"
import healthEducation from "./images/healthEducation.jpg"
import immunization from "./images/immunization.jpg"
import newBorn from "./images/newBorn.jpg"
import nutrition from "./images/nutrition.jpg"
import antenatal from "./images/antenatal.jpg"
import intensiveCare from "./images/intensiveCare.jpg"
import childSurvival from "./images/experience 3.jpg"


export const AboutText = [
    "The St. Thomas Specialist Hospital is a Private hospital, located at  Ijasi – Idepo 8, Ijebu Ode Local Government, Ogun State.  It was  established on 8/1/2010, and operates on a 24hrs basis and on all days of the week.",
    "The St. Thomas Specialist Hospital is Licensed hospital by the Nigeria Ministry of Health, with facility code 27/10/1/1/2/0037 and registered as Primary Health Care Centre."
]

//  the open 24 hrs 7 days a week

export const Services = [
    {
      title: "Medical Services",
      description: [
        "Our Medical Services focus on providing a broad range of comprehensive healthcare solutions aimed at diagnosing, treating, and preventing various illnesses and conditions.",
        "We offer both outpatient and inpatient services, allowing for continuous care throughout the treatment journey. From routine check-ups and screenings to specialized medical consultations, we address acute and chronic health issues with precision.",
        "Our expert medical team ensures that every patient receives personalized attention. With advanced diagnostic tools, we are equipped to manage a wide range of health concerns such as infections, cardiovascular diseases, respiratory issues, and chronic conditions like diabetes and hypertension.",
        "Whether you require immediate care for sudden symptoms or long-term disease management, our medical services are designed to support your overall well-being. We also emphasize preventive care through vaccinations, health screenings, and education on lifestyle modifications."
      ],
      img: surgerystaff
    },
    {
      title: "Surgical Services",
      description: [
        "Our Surgical Services encompass a comprehensive array of operative procedures, delivered by a team of highly qualified surgeons who specialize in various disciplines.",
        "We provide elective surgeries, which are planned in advance to address non-emergency conditions, as well as emergency surgeries that require immediate attention. Our operating theaters are equipped with the latest medical technologies, ensuring precision and safety in all procedures.",
        "Our surgical services include general surgery for conditions such as hernias, appendicitis, and gallbladder issues, as well as specialized surgeries in fields like orthopedics, cardiology, and neurology. We also handle reconstructive and cosmetic surgeries for patients who require corrective procedures.",
        "Post-surgery, we offer comprehensive rehabilitation and recovery services to ensure patients return to their daily lives as quickly as possible. From pre-surgical consultations to postoperative care, our focus is on minimizing risks and promoting successful outcomes for every patient."
      ],
      img: surgery
    },
    {
      title: "Special Clinical Services",
      description: [
        "Our Special Clinical Services are tailored to meet the specific health needs of diverse populations, offering specialized care that addresses a wide range of clinical concerns.",
        "These services are designed to complement our general medical and surgical offerings, with a focus on prevention, treatment, and the promotion of overall health and well-being. We deliver targeted programs that address community health challenges while providing individual patients with comprehensive care across a spectrum of conditions.",
        "Our team of specialists is committed to delivering high-quality care in areas such as maternal and child health, chronic disease management, and emergency response. We also engage with the community through health education and mobilization efforts to ensure that healthcare is accessible and understood by all."
      ],
      img: equipment,
      sub_services: [
        {
          title: "Antenatal Care (ANC)",
          img: antenatal,
          description: [
            "Our Antenatal Care (ANC) services are dedicated to providing expectant mothers with comprehensive care throughout their pregnancy to ensure a healthy journey from conception to delivery.",
            "We offer regular check-ups, including physical examinations, ultrasounds, and routine tests to monitor the health of both the mother and baby. Our team provides expert guidance on nutrition, exercise, and lifestyle modifications to promote a healthy pregnancy.",
            "Beyond medical check-ups, we offer educational sessions to prepare mothers for childbirth, breastfeeding, and newborn care. We also provide early detection and management of pregnancy complications to ensure the best outcomes for both mother and child."
          ]
        },
        {
          title: "Immunization",
          img: immunization,
          description: [
            "Our Immunization services provide vital protection against preventable diseases, ensuring that both children and adults are safeguarded from illnesses like polio, measles, and hepatitis.",
            "We follow national immunization schedules and offer a variety of vaccines to protect against common and serious diseases. Our focus is on community-wide immunization programs to reduce the spread of infectious diseases, particularly in children and high-risk groups.",
            "In addition to routine immunization, we offer specialized vaccine services for travelers, ensuring they are protected against diseases specific to certain regions."
          ]
        },
        {
          title: "Non-Communicable Diseases",
          img: diseases,
          description: [
            "Our Non-Communicable Disease (NCD) program focuses on the prevention, management, and treatment of chronic conditions such as diabetes, hypertension, cardiovascular diseases, and cancers.",
            "We provide long-term management plans that include regular monitoring, medication, lifestyle counseling, and dietary support to help patients manage their conditions effectively. Our goal is to prevent complications through early detection, education, and continuous care.",
            "In addition to treatment, we emphasize preventive strategies such as regular health screenings and education on risk factors like smoking, poor diet, and physical inactivity."
          ]
        },
        {
          title: "Family Planning",
          img: familyPlanning,
          description: [
            "Our Family Planning services offer comprehensive reproductive health solutions, enabling individuals and couples to plan their families in a safe and informed manner.",
            "We provide access to a variety of contraceptive methods, including hormonal options, intrauterine devices (IUDs), and barrier methods. Our counselors offer personalized advice based on individual needs, empowering patients to make informed choices about their reproductive health.",
            "In addition to contraception, we offer fertility counseling and services for those looking to start a family. We ensure that patients receive continuous support throughout their reproductive health journey."
          ]
        },
        {
          title: "Intensive Care Services",
          img: intensiveCare,
          description: [
            "Our Intensive Care Unit (ICU) offers 24/7 critical care for patients with life-threatening conditions who require close monitoring and advanced medical interventions.",
            "Our ICU is equipped with cutting-edge technology, including ventilators, cardiac monitors, and other life-support systems, ensuring that critically ill patients receive the highest level of care.",
            "Our specialized ICU team, consisting of doctors, nurses, and other healthcare professionals, is trained to manage complex conditions, providing round-the-clock care to patients in need of intensive support."
          ]
        },
        {
          title: "Child Survival",
          img: childSurvival,
          description: [
            "Our Child Survival services aim to reduce child mortality rates by providing comprehensive healthcare that addresses both preventive and curative needs for children.",
            "We focus on immunizations, growth monitoring, nutrition support, and the treatment of common childhood illnesses such as respiratory infections, diarrhea, and malaria.",
            "Through early intervention and ongoing care, we ensure that every child has the opportunity to thrive and reach their full potential."
          ]
        },
        {
          title: "Accidents and Emergency",
          img: accident,
          description: [
            "Our Accidents and Emergency (A&E) services are available 24/7 to handle medical emergencies, from trauma cases to acute medical conditions that require immediate attention.",
            "We are equipped to handle a wide range of emergencies, including road traffic accidents, fractures, heart attacks, and strokes. Our emergency team is trained to respond quickly, ensuring that patients receive life-saving care without delay.",
            "With a fully equipped ambulance service and a multidisciplinary team of doctors and nurses, we provide rapid and effective emergency care to stabilize patients before further treatment."
          ]
        },
        {
          title: "Nutrition",
          img: nutrition,
          description: [
            "Our Nutrition services focus on improving health outcomes by offering personalized dietary advice and nutritional support to individuals with specific health needs.",
            "We provide nutritional counseling for patients dealing with conditions such as obesity, diabetes, cardiovascular diseases, and malnutrition. Our team works closely with patients to develop customized meal plans that promote recovery and well-being.",
            "In addition to clinical nutrition, we offer community programs aimed at educating the public on the importance of a balanced diet for long-term health."
          ]
        },
        {
          title: "Health Education and Community Mobilization",
          img: healthEducation,
          description: [
            "We are committed to raising health awareness through our Health Education and Community Mobilization programs, which aim to empower individuals and communities with the knowledge they need to lead healthier lives.",
            "Our programs cover a wide range of topics, including disease prevention, maternal and child health, sanitation, and healthy lifestyle choices. We engage the community through workshops, outreach campaigns, and collaborations with local organizations.",
            "By promoting health literacy, we aim to reduce the burden of preventable diseases and improve overall public health outcomes."
          ]
        },
        {
          title: "Maternal and Newborn Care",
          img: newBorn,
          description: [
            "Our Maternal and Newborn Care services provide holistic support to mothers and babies, ensuring safe and healthy deliveries as well as postnatal care.",
            "We offer comprehensive maternity services, including antenatal care, labor and delivery support, and postnatal care. Our skilled midwives and obstetricians are dedicated to providing the best care for both mother and baby during childbirth.",
            "After delivery, we provide neonatal care and breastfeeding support, ensuring that newborns receive the care they need in their early days of life. We also educate mothers on postpartum health and childcare."
          ]
        }
      ]
    }
  ];
  





