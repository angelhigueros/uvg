import cv2
import torch


model = torch.hub.load('ultralytics/yolov5', 'yolov5m', pretrained=True)

def detector():
    cap = cv2.VideoCapture("data/video.mp4")
    
    
    while cap.isOpened():
        status, frame = cap.read()
        
        if not status:
            break

        # Inferencia
        pred = model(frame)
        
        # Cords: xmin, ymin, xmax, ymax
        df  = pred.pandas().xyxy[0]
        
        # fIltrar por confidence (score) - resultado aceptable
        # df = df[df["confidence"] > 0.5]
        
        for i in range(df.shape[0]):
            bbox = df.iloc[i][["xmin", "ymin", "xmax", "ymax"]].values.astype(int)
            
            # print bboxes: frame -> (xmin, ymin), (xmax, ymax) 
            cv2.rectangle(frame, (bbox[0], bbox[1]), (bbox[2], bbox[3]), (255, 0, 0), 2)
            
            # print text: frame -> (xmin, ymin), (xmax, ymax) 
            cv2.putText(frame, f"{df.iloc[i]['name']}: {round(df.iloc[i]['confidence'], 4)}", 
                        (bbox[0], bbox[1] - 15),
                        cv2.FONT_HERSHEY_PLAIN,
                        1,
                        (255, 0, 0),
                        2)
                        
        
        cv2.imshow("frame", frame)
        
        if cv2.waitKey(10) and 0xFF == ord('q'):
            break


if __name__ == '__main__':
    detector()
